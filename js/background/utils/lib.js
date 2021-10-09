// Load syncStorage
const loadSyncStorage = async () => {
  return new Promise((resolve) => {
    chrome.storage.sync.get(null, function (storage) {
      resolve(storage)
    })
  })
}

// Set storage
const setSyncStorage = async (item) => {
  return new Promise((resolve) => {
    chrome.storage.sync.set(item, () => {
      resolve()
    })
  })
}

// Init options
function createSettings() {
  // Add static stuff
  var settings = defaultSettings
  // Add dynamic stuff
  // Add new settings areas here!
  settings.user_id = getUserId()
  return settings
}

// Load syncStorage
const loadSettings = async () => {
  return new Promise((resolve) => {
    chrome.storage.sync.get(null, function (storage) {
      resolve(storage.settings)
    })
  })
}

// Generate userId
function getUserId() {
  // E.g. 8 * 32 = 256 bits token
  var randomPool = new Uint8Array(32)
  crypto.getRandomValues(randomPool)
  var hex = ""
  for (var i = 0; i < randomPool.length; ++i) {
    hex += randomPool[i].toString(16)
  }
  // E.g. db18458e2782b2b77e36769c569e263a53885a9944dd0a861e5064eac16f1a
  return hex
}

// Post data
async function postData(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    })
  } catch (error) {}
}

// Dev logging
if (config.debug) var log = console.log.bind(window.console)
else var log = function () {}
