// URL receiver from content script and init options giver
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // Get settings
  if (request.type === "settings") {
    sendResponse({ settings: settingsLocal })
  }
  // Check current unfollower
  if (request.type === "check_current_unfollower") {
    if (settingsLocal.current_unfollower) {
      chrome.tabs.get(settingsLocal.current_unfollower, function (tab) {
        if (chrome.runtime.lastError) {
          sendResponse({ exists: false, mode: "c" })
          changeSetting(sender.tab.id, "current_unfollower")
        } else {
          // Tab exists
          // Check if it's a Facebook tab
          if (
            tab.url.includes("https://facebook.com") ||
            tab.url.includes("https://www.facebook.com") ||
            tab.url.includes("https://web.facebook.com")
          ) {
            if (sender.tab.id === settingsLocal.current_unfollower) {
              sendResponse({ exists: false, mode: "a" })
            } else {
              sendResponse({ exists: true, mode: "bb" })
            }
          } else {
            sendResponse({ exists: false, mode: "aa" })
          }
        }
      })
    } else {
      sendResponse({ exists: false, mode: "d" })
      changeSetting(sender.tab.id, "current_unfollower")
    }
    return true
  }
  // Change setting
  if (request.type === "change_setting") {
    changeSetting(request.newVal, request.setting)
  }
  // Log event
  if (request.type === "event") {
    eventLogReceiver(request)
  }
  // Open settings
  if (request.type === "open_settings") {
    chrome.runtime.openOptionsPage()
  }
})
