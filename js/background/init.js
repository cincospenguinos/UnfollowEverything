initialise()

// Initialise
async function initialise() {
  const storage = await loadSyncStorage()

  if (!storage || !storage.settings || !storage.settings.user_id) {
    await setSyncStorage({ settings: createSettings() })
    loadSettingsAndAmplitude()
  } else {
    log("Startup: user ID in syncstorage.settings")
    // If items.settings and userId does exist, there is stuff there we need to grab
    // This will also add any new settings in
    loadSettingsAndAmplitude()
  }
}

// Get settings from sync to settingsLocal, and run options page if asked for
async function loadSettingsAndAmplitude() {
  // Get settings
  const settings = await loadSettings()
  // Update local settings
  settingsLocal = settings

  // Initialise Amplitude
  await initAmplitude(settingsLocal.user_id)

  // Send all settings to Amplitude
  sendAllSettingsToAmplitude(settingsLocal)

  // FIXME:
  // Set uninstall URL
  // chrome.runtime.setUninstallURL(
  //   `https://www.unweb.app/uninstall?id=${settingsLocal.user_id}`
  // )

  // Add any individual settings that don't currently exist
  Object.keys(defaultSettings).forEach(function (setting) {
    if (!setting in settingsLocal) {
      console.log(
        `${setting} not present in settings, will update with default`
      )
      changeSetting(defaultSettings[setting], setting)
    }
  })

  // Log install event
  if (logInstall) {
    changeSetting(moment().format("YYYY-MM-DD"), "install_date")
    changeSetting(moment().format(), "install_time")
    changeSetting(
      moment().startOf("isoWeek").format("YYYY-MM-DD"),
      "install_week_date"
    )
    eventLog("install", {})
    logInstall = false
  }
  if (logUpdate) {
    eventLog("update", logUpdate)
    logUpdate = false
  }
}
