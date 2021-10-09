var CONSOLE_LOG = true
var AMPLITUDE_LOG = true

function eventLogReceiver(request) {
  eventLog(request.eventType, request.detailsObj)
}

function eventLog(eventType, detailsObj) {
  // Log the event
  consoleLogger(eventType, detailsObj)

  // Send the event to Amplitude only if user is not opted out
  if (AMPLITUDE_LOG) {
    // Send event
    amplitude.getInstance().logEvent(eventType, { ...detailsObj })
  }
}

function consoleLogger(eventType, detailsObj) {
  function logWithColor(message, color) {
    if (CONSOLE_LOG) {
      message = `%c${message}`
      color = `color:${color};`
      log(message, color)
    }
  }
  switch (eventType) {
    case "startup":
      logWithColor(`startup`, "blue")
      break
    case "install":
      logWithColor(`install`, "orange")
      break
    case "update":
      logWithColor(
        `update ${detailsObj.previousVersion} ${detailsObj.thisVersion}`,
        "yellow"
      )
      break
    case "changeSetting":
      logWithColor(
        `${detailsObj.setting} ${JSON.stringify(detailsObj.newVal)}`,
        "magenta"
      )
      break
    default:
      logWithColor(`${eventType} ${JSON.stringify(detailsObj)}`, "pink")
  }
}
