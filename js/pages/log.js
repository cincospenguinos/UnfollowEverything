// Send event from content script
function eventLogSender(eventType, detailsObj) {
  chrome.runtime.sendMessage({
    type: "event",
    eventType,
    detailsObj,
  })
}

eventLogSender("page", { page: window.location.pathname.split("/")[3] })
