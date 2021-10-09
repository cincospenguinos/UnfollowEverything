// New version of getSettings
async function loadSyncStorage() {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage({ type: "settings" }, function (response) {
      resolve(response.settings)
    })
  })
}

// New version of getSettings
async function unfollowerExists() {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage({ type: "check_current_unfollower" }, function (
      response
    ) {
      console.log(response)
      resolve(response.exists)
    })
  })
}

// Send event from content script
function eventLogSender(eventType, detailsObj) {
  chrome.runtime.sendMessage({
    type: "event",
    eventType,
    detailsObj,
  })
}

// Dev logging
if (config.debug) var log = console.log.bind(window.console)
else var log = function () {}

// Extract core domain from URL you want to check
function extractDomain(url) {
  if (url !== "") {
    var niceUrl = new URL(url)
    // log(niceUrl.hostname + '/' + niceUrl.pathname.split("/")[1]);
    return niceUrl.hostname + "/" + niceUrl.pathname.split("/")[1]
  } else {
    return "empty.url/empty"
  }
}

function changeSettingRequest(newVal, setting) {
  sendMessage("change_setting", {
    newVal,
    setting,
  })
}

function sendMessage(type, object) {
  object.type = type
  chrome.runtime.sendMessage(object)
}

function excludeFromSettingsArray(value, settingsArray, setting) {
  settingsArray = settingsArray.filter(
    (existingValue) => !(existingValue === value)
  )
  changeSettingRequest(settingsArray, setting)
}
function includeToSettingsArray(value, settingsArray, setting) {
  if (!settingsArray.includes(value)) {
    settingsArray.push(value)
  }
  changeSettingRequest(settingsArray, setting)
}

function addCSS(cssId, nudgeUrl) {
  if (!document.getElementById(cssId)) {
    var head = document.getElementsByTagName("head")[0]
    var link = document.createElement("link")
    link.id = cssId
    link.rel = "stylesheet"
    link.type = "text/css"
    link.href = chrome.extension.getURL(nudgeUrl)
    link.media = "all"
    head.appendChild(link)
  }
}

// Async version
async function docHeadExists() {
  return new Promise((resolve) => {
    document.addEventListener("DOMSubtreeModified", onLoad, false)
    function onLoad() {
      if (document.body) {
        document.removeEventListener("DOMSubtreeModified", onLoad, false)
        resolve(true)
      }
    }
  })
}

function createEl(parent, type, name) {
  var element = document.createElement(type)
  if (name) {
    element.id = name
  }
  parent.appendChild(element)
  return element
}

// Helper to check if key defined
function keyDefined(object, key) {
  if (object[key] !== undefined) {
    return true
  } else {
    return false
  }
}

function appendHtml(parent, childString, callback) {
  if (parent) {
    parent.insertAdjacentHTML("afterbegin", childString)
  }
  if (callback) {
    callback()
  }
}

function el(id) {
  var element = document.getElementById(id)
  return element
}

function deleteEl(element) {
  if (!element || !element.parentNode) {
    return
  }
  element.parentNode.removeChild(element)
}

// Create a random delay between XMLHttpRequests
function randomTime(floor, variance) {
  var ms = 1000
  return Math.floor(ms * (floor + Math.random() * variance))
}
