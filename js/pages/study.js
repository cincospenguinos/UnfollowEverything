const input = document.getElementById("js-input");
const button = document.getElementById("js-submit");
const warning = document.getElementById("js-warning");

const groupA = "1fctaBd3571k";
const groupB = "1fctaBd3572k";
const groupC = "1fctaBd3573k";

button.onclick = function () {
  const value = input.value.trim();

  if (checkValue(value)) {
    // Send to Amplitude
    changeSettingRequest(value, "study_id");
    Object.keys(controlSettings).forEach((setting) => {
      changeSettingRequest(controlSettings[setting], setting);
    });
    // Get group ID
    const groupId = value.substring(0, 12);

    // And change settings depending on value
    if (groupId === groupA) {
      console.log("Control group - not changing settings");
    } else if (groupId === groupB || groupId === groupC) {
      console.log("Unfollow group");
    }

    window.location = "welcometostudy.html";
  }
};

function checkValue(value) {
  const groupId = value.substring(0, 12);
  console.log(groupId);
  function checkGroupId(groupId) {
    if (groupId === groupA || groupId === groupB || groupId === groupC) {
      return true;
    } else {
      return false;
    }
  }
  if (checkGroupId(groupId)) {
    return true;
  } else {
    warning.style.display = "block";
  }
}

// Control group study settings
var controlSettings = {
  excluded_hidees: [],
  excluded_domains: [],
  dev: config.dev,
  enabled: false,
  share_data: true,
  fb_profile_ratio: false,
  study: true,
  current_unfollower: false,
  invisible: true,
  // Study data
  unfollow_total: false,
  unfollow_friends: false,
  unfollow_pages: false,
  unfollow_groups: false,
  follow_total: false,
  follow_friends: false,
  follow_pages: false,
  follow_groups: false,
  all_total: false,
  // Refollow settings
  refollow: false,
  refollow_count: 0,
  refollow_time: false,
  // Study group C setting
  leave_unfollow_disabled: false,
};

function changeSettingRequest(newVal, setting) {
  sendMessage("change_setting", {
    newVal,
    setting,
  });
}

function sendMessage(type, object) {
  object.type = type;
  chrome.runtime.sendMessage(object);
}
