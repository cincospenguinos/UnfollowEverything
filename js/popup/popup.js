;(async function () {
  const settings = await loadSyncStorage()
  const button = document.getElementById("js-switch")
  const buttonText = document.getElementById("js-switch-text")
  const optionsLink = document.getElementById("js-options")
  const onText = "Unfollow is on"
  const offText = "Unfollow is off"

  log(settings.enabled)

  if (settings.enabled) {
    buttonText.innerText = onText
  } else {
    buttonText.innerText = offText
    toggleClass(button, "switch-button-off")
  }

  function snooze() {
    changeSettingRequest(true, "enabled")
    buttonText.innerText = onText
    settings.enabled = true
    toggleClass(button, "switch-button-off")
  }

  function unsnooze() {
    changeSettingRequest(false, "enabled")
    buttonText.innerText = offText
    settings.enabled = false
    toggleClass(button, "switch-button-off")
  }

  button.onclick = () => {
    if (settings.enabled) {
      unsnooze()
    } else {
      snooze()
    }
  }
  optionsLink.onclick = () => {
    chrome.runtime.openOptionsPage()
  }
})()
