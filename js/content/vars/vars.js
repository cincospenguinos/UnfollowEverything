var unfollow = {
  listUrl:
    "https://www.facebook.com/feed_preferences/profile_list_more/?card_type=unfollow&filter=all&page=",
  actionUrl: "https://www.facebook.com/ajax/follow/unfollow_profile.php",
  profiles: [],
  executedProfiles: [],
  totalProfiles: false,
  messages: {
    loaded: "Unfollow everything",
    empty: "No profiles to unfollow",
    start: "Trying to unfollow ",
    success: "Successfully unfollowed ",
    fail: "Couldn't unfollow ",
  },
  profileRequestCounter: 0,
  profileCounter: 0,
  safetyLock: 100000,
  continueRequest: true,
  timeStarted: false,
  verifText: {
    start: 'Arbiter.inform("UnfollowUser", {"profile_id":',
    end: "});",
  },
}

var refollow = {
  listUrl:
    "https://www.facebook.com/feed_preferences/profile_list_more/?card_type=refollow&filter=all&page=",
  actionUrl: "https://www.facebook.com/ajax/follow/follow_profile.php?dpr=1",
  profiles: [],
  executedProfiles: [],
  totalProfiles: false,
  messages: {
    loaded: "Ready to refollow ",
    empty: "No profiles to refollow",
    start: "Trying to refollow ",
    success: "Successfully refollowed ",
    fail: "Couldn't refollow ",
  },
  profileRequestCounter: 0,
  profileCounter: 0,
  safetyLock: 100000,
  continueRequest: true,
  timeStarted: false,
  verifText: {
    start: 'Arbiter.inform("FollowUser", {"profile_id":',
    end: "});",
  },
}
