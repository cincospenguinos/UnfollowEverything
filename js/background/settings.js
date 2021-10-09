function changeSetting(newVal, setting) {
  // Set up Amplitude identify
  let identify = new amplitude.Identify()
  // For event logging
  let previousVal = settingsLocal[setting]
  // Update settings locally
  settingsLocal[setting] = newVal
  // Update settings in sync
  setSyncStorage({ settings: settingsLocal })
  // Update settings on Amplitude
  identify.set(`${setting}`, settingsLocal[setting])
  amplitude.getInstance().identify(identify)

  const cleanedVals = cleanVals({ newVal, previousVal })
  newVal = cleanedVals.newVal
  previousVal = cleanedVals.previousVal

  eventLog("changeSetting", {
    newVal,
    previousVal,
    setting,
  })
}

function cleanVals(valObject) {
  // If both previous and new are arrays
  if (Array.isArray(valObject.newVal) && Array.isArray(valObject.previousVal)) {
    // If new is longer than previous
    if (valObject.newVal.length > valObject.previousVal.length) {
      let difference = valObject.newVal.filter(
        (newValValue) => !valObject.previousVal.includes(newValValue)
      )
      valObject.newVal = difference
      valObject.previousVal = []
      return valObject
    } else {
      let difference = valObject.previousVal.filter(
        (previousValValue) => !valObject.newVal.includes(previousValValue)
      )
      valObject.previousVal = difference
      valObject.newVal = []
      return valObject
    }
  } else {
    return valObject
  }
}
