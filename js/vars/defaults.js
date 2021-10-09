// Default non-domain settings
const defaultSettings = {
  excluded_hidees: [],
  excluded_domains: [],
  dev: config.dev,
  enabled: true,
  share_data: true,
  fb_profile_ratio: false,
  study: false,
  study_id: false,
  current_unfollower: false,
  invisible: false,
  // Study data
  unfollow_total: false,
  unfollow_total_alt: false,
  unfollow_friends: false,
  unfollow_pages: false,
  unfollow_groups: false,
  follow_total: false,
  follow_total_alt: false,
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

// Don't logInstall unless this switch is flipped
let logInstall = false;
let logUpdate = false;

// Keep local settings
let settingsLocal = false;
