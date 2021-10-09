// Check whether new version is installed
chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason == "install") {
    // Start onboarding on install
    chrome.tabs.create({
      url: chrome.extension.getURL("html/pages/start.html"),
    })
    logInstall = true
  } else if (details.reason == "update") {
    const thisVersion = chrome.runtime.getManifest().version
    logUpdate = {
      previousVersion: details.previousVersion,
      thisVersion,
    }
    if (details.previousVersion !== thisVersion || config.dev) {
      // This is for showing update article
    }
  }
})

const UPDATE_INTERVAL = 1
// Log whether you are initialised
let initialised = false

;(async function () {
  // If you've never had state, add it
  let state = await getState()
  if (!state) {
    await setState({
      domain: false,
      time: 0,
    })
  }
  setInterval(isFacebookActive, UPDATE_INTERVAL * 1000)
})()

async function isFacebookActive() {
  if (!settingsLocal.study) {
    return
  }
  // Set domain false if initialising
  if (!initialised) {
    domainUpdate(false)
    initialised = true
    return
  }
  chrome.idle.queryState(60, function (state) {
    if (state === "active") {
      chrome.tabs.query(
        { lastFocusedWindow: true, active: true },
        function (tabs) {
          if (tabs.length === 0) {
            domainUpdate(false)
            return
          } else {
            let tab = tabs[0]
            // Find out whether window is focused
            chrome.windows.get(tab.windowId, function (window) {
              if (window && window.focused) {
                if (
                  tab.url.includes("https://facebook.com") ||
                  tab.url.includes("https://www.facebook.com") ||
                  tab.url.includes("https://web.facebook.com")
                ) {
                  domainUpdate(true)
                } else {
                  domainUpdate(false)
                }
              } else {
                domainUpdate(false)
              }
            })
          }
        }
      )
    } else {
      domainUpdate(false)
    }
  })
}

async function domainUpdate(domain) {
  let state = await getState()
  let previousDomain = state.domain
  // Set domain
  state.domain = domain
  if (previousDomain && !domain) {
    // Visit end
    eventLog("visit", { time: state.time })
    state.time = 0
    setState(state)
  } else if (!previousDomain && domain) {
    // Visit start
    state.time = UPDATE_INTERVAL
    setState(state)
  } else if (previousDomain && domain) {
    // Visit continuing
    state.time = state.time + UPDATE_INTERVAL
    setState(state)
  } else if (!previousDomain && !domain) {
    // Non-visit continuing
  }
}

async function getState() {
  return new Promise((resolve) => {
    chrome.storage.local.get("state", function (result) {
      resolve(result.state)
    })
  })
}

async function setState(state) {
  await chrome.storage.local.set({ state }, function () {})
}
