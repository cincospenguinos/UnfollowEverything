// Define a simple state
let state = {
  follow: {
    profiles: [],
    count: 0,
  },
  unfollow: {
    profiles: [],
    count: 0,
  },
  mode: false,
};

// Define some parameters
const FOLLOW_DAILY_LIMIT = 100;
const FOLLOW_MINUTES_UNTIL_RESUME = 1440;

// For study
// const MINUTES_UNTIL_ENABLED = 1
let MINUTES_UNTIL_ENABLED = 7 * 24 * 60;

// Set up Moment in lower case
moment.locale("en", {
  calendar: {
    lastDay: "[yesterday at] LT",
    sameDay: "[today at] LT",
    nextDay: "[tomorrow at] LT",
    lastWeek: "[last] dddd [at] LT",
    nextWeek: "dddd [at] LT",
    sameElse: "L",
  },
});

// Use fetch retry
var fetch = fetchRetry(fetch);

// Refollow
// Visible
// Enabled

// Always have advert for unfollowing at the bottom.

(async function () {
  // Creds
  fb_dtsg = await getFbToken();
  log(fb_dtsg);
  user_id = getUserId();
  // Settings
  const settings = await loadSyncStorage();

  // Check if unfollow is enabled
  if (!settings.enabled && !settings.study) {
    return;
  }

  console.log(settings.study);
  console.log(settings.study_id);
  console.log(settings.leave_unfollow_disabled);
  console.log(settings.enabled);

  // Enable the Unfollower for study participants if they are in group B and if they installed over a week ago
  if (
    settings.study &&
    (settings.study_id.includes("1fctaBd3572k") ||
      (settings.study_id.includes("1fctaBd3573k") &&
        !settings.leave_unfollow_disabled)) &&
    !settings.enabled
  ) {
    // For pilot group, different setting
    if (settings.study_id.includes("1fctaBd3572kPT")) {
      MINUTES_UNTIL_ENABLED = 3 * 24 * 60;
    }

    console.log("Checking against install time");
    console.log(moment().diff(moment(settings.install_time), "minutes"));

    if (
      moment().diff(moment(settings.install_time), "minutes") >
      MINUTES_UNTIL_ENABLED
    ) {
      log("Now enabled");
      changeSettingRequest(true, "enabled");
      eventLogSender("unfollow_enabled", {
        install_time: settings.install_time,
        enabled_time: moment().format(),
      });
      settings.enabled = true;
    } else {
    }
  }

  // Choose mode: unfollow or follow
  state.mode = settings.refollow ? "follow" : "unfollow";

  // Don't load the unfollower if it exists elsewhere already
  if (await unfollowerExists()) {
    return;
  }

  // Show UX
  if (settings.invisible) {
    // Don't show the UX
  } else {
    // Show the UX
    await docHeadExists();
    addCSS("nudge-facebook-dialog", "css/injected/facebook.css");
    const unfollowerContainer = await createUnfollowerContainer();
    if (extensionStorage && extensionStorage["run.html"]) {
      if (!document.getElementById("nudge-dialog")) {
        appendHtml(unfollowerContainer, extensionStorage["run.html"]);
        runUx();
        instructions(
          `Close tab to stop ${state.mode}ing. or go to <a href="" id="unfollow-settings" target="_blank">Settings</a> to disable.<br><br> `
        );
        subheadline(
          ` Made with ❤️ by <a href="https://twitter.com/louisbarclay" target="_blank">Louis</a>. Please <a href="https://chrome.google.com/webstore/detail/unfollow-everything-for-f/ohceakcebcalehmaliegoenkliddajoo?hl=en" target="_blank">leave a review</a>.`
        );
        document.getElementById("unfollow-settings").onclick = function () {
          chrome.runtime.sendMessage({
            type: "open_settings",
          });
          return false;
        };
      }
    }
  }

  // Load initial data
  const unfollowData1 = await listProfilesRequest("unfollow", 0, fb_dtsg);
  const followData1 = await listProfilesRequest("follow", 0, fb_dtsg);

  // Update state
  if (followData1.totalProfilesCount) {
    state.follow.count = followData1.totalProfilesCount || 0;
  }
  if (unfollowData1.totalProfilesCount) {
    state.unfollow.count = unfollowData1.totalProfilesCount || 0;
  }

  // If no profiles, don't update

  // Store profile data
  storeProfileData(unfollowData1.profiles, "unfollow");
  storeProfileData(followData1.profiles, "follow");

  // For study participants only
  if (settings.study) {
    changeSettingRequest(followData1.totalProfilesCount, "follow_total");
    changeSettingRequest(unfollowData1.totalProfilesCount, "unfollow_total");
    changeSettingRequest(
      followData1.totalProfilesCount + unfollowData1.totalProfilesCount,
      "all_total"
    );
  }

  // For all users
  let ratio =
    unfollowData1.totalProfilesCount /
    (unfollowData1.totalProfilesCount + followData1.totalProfilesCount);
  changeSettingRequest(ratio, "fb_profile_ratio");

  // Don't do anything else if no profiles to follow, unless in study
  if (state[state.mode].count === 0 && !settings.study) {
    // For the mode you've chosen, there are no profiles to follow
    headline(`✔️ Great news! No profiles to ${state.mode}`);
    return;
  }

  // Load the whole list for whichever mode you want to do
  const loaded = await loadFullData(state.mode);

  // Extremely awkward piece of code for group C in study
  console.log(state[state.mode].profiles.length);
  if (
    settings.study &&
    state[state.mode].profiles.length === 0 &&
    settings.study_id.includes("1fctaBd3573k") &&
    !settings.leave_unfollow_disabled
  ) {
    changeSettingRequest(true, "leave_unfollow_disabled");
    changeSettingRequest(false, "enabled");
  }

  // If it's study mode, also load the list for the other mode
  if (settings.study) {
    getBreakdown(state.mode);
  }

  // Unfollow or follow
  if (loaded && settings.enabled && state[state.mode].count !== 0) {
    // All loaded, we continue
    for (const profile of state[state.mode].profiles) {
      // Don't allow following if it's too soon to
      if (
        state.mode === "follow" &&
        moment().diff(moment(settings.refollow_time), "minutes") <
          FOLLOW_MINUTES_UNTIL_RESUME
      ) {
        headline(
          `⚠️ The daily refollow limit of ${FOLLOW_DAILY_LIMIT} has been reached. Refollowing will resume again ${moment(
            settings.refollow_time
          )
            .add(FOLLOW_MINUTES_UNTIL_RESUME, "minutes")
            .calendar()}. You'll need to refresh this page.`
        );
        subheadline(
          `We can only follow ${FOLLOW_DAILY_LIMIT} per day because Facebook's spam filters might block us.`
        );
        break;
      }

      // Put in the follow or unfollow request
      const action = await followRequest(
        state.mode,
        fb_dtsg,
        profile.profile_id,
        user_id
      );

      // If no one to unfollow or refollow, put message
      // You may want to go into Invisible mode in Settings

      // Receive the request
      if (action) {
        profile.success = true;
        log(`${state.mode}: ${profile.name}`);
        headline(
          `✔️ ${state.mode === "follow" ? "Refollowed" : "Unfollowed"} ${
            profile.name
          } (${
            state[state.mode].profiles.filter((profile) => profile.success)
              .length
          } of ${state[state.mode].count})`
        );
        // For special case of follow
        if (state.mode === "follow") {
          settings.refollow_count = settings.refollow_count + 1;
          changeSettingRequest(settings.refollow_count, "refollow_count");
          if (settings.refollow_count > FOLLOW_DAILY_LIMIT) {
            settings.refollow_count = 0;
            changeSettingRequest(0, "refollow_count");
            changeSettingRequest(moment().format(), "refollow_time");
            settings.refollow_time = moment().format();
          }
        }
      } else {
        // Blocked by Facebook
        headline(`⚠️ Error 120: something went wrong`);
        // FIXME: Consider having 1 day break here for both unfollow AND refollow
        break;
      }
      await sleep(randomTime(1, 0.1));
    }
  }
})();

// This is to get the remaining
async function getBreakdown(mode) {
  // Define the other mode
  const otherMode = mode === "follow" ? "unfollow" : "follow";
  // Load data for the other mode
  const loadedOtherMode = await loadFullData(otherMode);
  // Get info for study participants
  if (loadedOtherMode) {
    // Log more granular information
    changeSettingRequest(
      getTypeNumber(state.follow.profiles, "groups"),
      "follow_groups"
    );
    changeSettingRequest(
      getTypeNumber(state.follow.profiles, "friends"),
      "follow_friends"
    );
    changeSettingRequest(
      getTypeNumber(state.follow.profiles, "pages"),
      "follow_pages"
    );
    changeSettingRequest(
      getTypeNumber(state.unfollow.profiles, "groups"),
      "unfollow_groups"
    );
    changeSettingRequest(
      getTypeNumber(state.unfollow.profiles, "friends"),
      "unfollow_friends"
    );
    changeSettingRequest(
      getTypeNumber(state.unfollow.profiles, "pages"),
      "unfollow_pages"
    );
    changeSettingRequest(state.follow.profiles.length, "follow_total_alt");
    changeSettingRequest(state.unfollow.profiles.length, "unfollow_total_alt");

    function getTypeNumber(profiles, type) {
      return profiles.filter((profile) => profile.type === type).length;
    }
  }
}

async function followRequest(mode, fb_dtsg, profile_id, user_id) {
  const request = await fetch(
    `https://${window.location.host}/ajax/follow/${mode}_profile.php?__a=1&__req=65&nctr[_mod]=pagelet_timeline_profile_actions&location=1&fb_dtsg=${fb_dtsg}&__user=${user_id}&profile_id=${profile_id}`,
    {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    }
  );

  if (!request.ok) {
    console.log(request.statusText);
    return false;
  }

  let response = await request.text();
  response = response.substr(response.indexOf("{"));
  response = JSON.parse(response);

  // Look for an error
  if (response && response.error) {
    console.log(response.error);
    eventLogSender();
    return false;
  }

  // Look for success
  if (response && response.onload && response.onload[0]) {
    if (
      response.onload[0] ===
      `Arbiter.inform("${
        mode === "follow" ? "Follow" : "Unfollow"
      }User", {"profile_id":${profile_id}});`
    ) {
    }
    return true;
  }
  return false;
}

async function getFbToken() {
  return new Promise((resolve) => {
    let token = false;

    // Start an observer to look at scripts
    const observer = new MutationObserver(() => {
      // Option B
      let tokenObject;

      // First attempt
      // Could use this capture group for refining in future: [a-zA-Z0-9\-_]
      tokenObject =
        document.body &&
        document.body.innerHTML.match(/("token":"(\S{12,15}:\S{12,15})")/) &&
        document.body.innerHTML.match(/("token":"(\S{12,15}:\S{12,15})")/)[2];
      token = tokenObject;
      if (tokenObject) {
        observer.disconnect();
        console.log("Found token");
        resolve(token);
      } else {
        console.log("Error finding token");
      }

      // Second attempt
      tokenObject =
        document.body &&
        document.body.innerHTML.match(/{.{5,10}fb_dtsg.+?}/g) &&
        document.body.innerHTML.match(/{.{5,10}fb_dtsg.+?}/g)[0];
      token = tokenObject && JSON.parse(tokenObject).value;
      if (tokenObject) {
        observer.disconnect();
        resolve(token);
      } else {
        console.log("Error finding token");
      }
    });

    observer.observe(document, {
      childList: true,
      subtree: true,
      attributes: false,
      characterData: false,
    });
  });
}

function getUserId() {
  if (document.cookie.match(/c_user=(\d+)/)) {
    if (document.cookie.match(/c_user=(\d+)/)[1]) {
      let user_id = document.cookie.match(
        document.cookie.match(/c_user=(\d+)/)[1]
      );
      user_id = user_id[0];
      return user_id;
    }
  }
}

async function listProfilesRequest(mode, page, fb_dtsg) {
  const request = await fetch(
    `https://${
      window.location.host
    }/feed_preferences/profile_list_more/?card_type=${
      mode === "unfollow" ? "unfollow" : "refollow"
    }&filter=all&page=${page}&dpr=1&__a=1&fb_dtsg=${fb_dtsg}`,
    {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    }
  );

  if (!request.ok) {
    return false;
  }

  // TODO: Error handling
  let response = await request.text();
  response = response.substr(response.indexOf("{"));
  response = JSON.parse(response);
  response = response.payload;
  return response;
}

function storeProfileData(profiles, mode) {
  for (var j = 0; j < profiles.length; j++) {
    let profile = {
      profile_id: profiles[j].id,
      name: profiles[j].name,
      type: profiles[j].type,
      tried: false,
      success: false,
    };
    // Check for dupes
    // let names = state[mode].profiles.map((profile) => profile.name)
    // if (names.includes(profiles[j].name)) {
    // }
    // Store
    state[mode].profiles.push(profile);
  }
  if (mode === state.mode) {
    headline(
      `Loaded ${state[state.mode].profiles.length} out of ${
        state[state.mode].count
      }`
    );
  }
}

async function loadFullData(mode) {
  return new Promise((resolve) => {
    let page = 1;
    request(page);

    async function request(page) {
      const data = await listProfilesRequest(mode, page, fb_dtsg);
      // Check you get some valid data back
      if (data) {
        storeProfileData(data.profiles, mode);
        if (data.profiles.length > 0) {
          page = page + 1;
          request(page);
        } else {
          resolve(true);
          // We can start actioning
        }
      } else {
        log("failed");
      }
    }
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// UX for run.html
function runUx() {
  const container = document.getElementById("unfollower-container");
  const close = document.getElementById("unfollower-close");

  close.onclick = function () {
    deleteEl(container);
  };
}

// UX stuff
async function createUnfollowerContainer() {
  const unfollowerContainer = createEl(
    document.body,
    "div",
    "unfollower-container"
  );
  // Temporarily set display to none so you don't get a loading glitch
  unfollowerContainer.style.display = "none";
  return new Promise((resolve) => {
    resolve(unfollowerContainer);
  });
}

// Write to headline
function headline(message) {
  function getEl() {
    return document.getElementById("unfollower-headline");
  }
  if (getEl()) {
    getEl().innerHTML = message;
  }
}

// Write to subheadline
function subheadline(message) {
  function getEl() {
    return document.getElementById("unfollower-subheadline");
  }
  if (getEl()) {
    getEl().innerHTML = message;
  }
}

// Write to subheadline
function instructions(message) {
  function getEl() {
    return document.getElementById("unfollower-instructions");
  }
  if (getEl()) {
    getEl().innerHTML = message;
  }
}
