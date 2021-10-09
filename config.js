var config = {
  dev: false,
  debug: false
}

// Dev config variables
if (!chrome.runtime.getManifest().update_url) {
  console.log("Env: dev")
  config.dev = true
  config.debug = true
}
