;(async () => {
  var settings = await loadSyncStorage()
  // Find any main toggles and set correct value + handle click
  Array.from(document.getElementsByClassName("toggle")).forEach(function (
    element
  ) {
    // This will only work if the parentNode of the element has an id that's a valid setting string
    var setting = element.parentNode.id
    var left = element.childNodes[0]
    var currentVal = !left.className.includes("on")

    // Only change the onboarding thing on the very first click
    let onFirstClick = true
    element.addEventListener("click", function (e) {
      // e.stopPropagation()
      // e.stopImmediatePropagation()
      e.preventDefault()
      handleToggle(
        element,
        function handleSettingChange(value) {
          changeSettingRequest(value, setting)
        },
        null,
        onFirstClick
      )
      onFirstClick = false
    })

    if (currentVal !== settings[setting]) {
      handleToggle(element, null)
    }
  })
  // Plug in Nudge ID if we have it
  var nudgeId = el("js-unweb-id")
  if (nudgeId) {
    nudgeId.innerHTML = settings.user_id
  }
})()

function handleToggle(element, callback, override) {
  var left = element.childNodes[0]
  var newVal = left.className.includes("on")
  var right = element.childNodes[1]
  if (override) {
    if (newVal) {
      toggleClass(left, "on")
      toggleClass(right, "on")
    }
  } else {
    toggleClass(left, "on")
    toggleClass(right, "on")
  }
  if (callback) {
    callback(newVal)
  }
}
