;(async function () {
  const settings = await loadSyncStorage()
  const domain = window.location.hash.substring(1)
  const hideesContainer = document.getElementById("js-hidees")
  const title = document.getElementById("js-title")
  const intro = document.getElementById("js-intro")
  const backLink = document.getElementById("js-back")

  backLink.onclick = () => {
    window.location = "./sites.html"
  }

  document.title = `Site: ${domain}`

  title.innerHTML = `${domain}`

  intro.innerHTML = `Configure the sections of ${domain} that are hidden by Unweb.`

  hideesStore
    .filter((hidee) => {
      return hidee.domain === domain
    })
    .forEach((hidee) => {
      hideesContainer.appendChild(card(hidee))
      handleToggle(
        document.getElementById(`toggle-${hidee.slug}`),
        !settings.excluded_hidees.includes(hidee.slug),
        () => {
          excludeFromSettingsArray(
            hidee.slug,
            settings.excluded_hidees,
            "excluded_hidees"
          )
        },
        () => {
          includeToSettingsArray(
            hidee.slug,
            settings.excluded_hidees,
            "excluded_hidees"
          )
        }
      )
    })

  function card(hidee) {
    let container = document.createElement("div")
    container.innerHTML = `<div class="card"><div class="main vertical" id=""><h2>${hidee.shortName}</h2><p>${hidee.description}</p></div><div class="button-container"><button class="toggle"  id="toggle-${hidee.slug}"><div class="left"></div><div class="right"></div></button></div></div>`
    return container
  }
})()
