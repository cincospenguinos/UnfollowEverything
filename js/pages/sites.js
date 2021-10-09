;(async function () {
  const settings = await loadSyncStorage()
  const sitesContainer = document.getElementById("js-sites")
  const backLink = document.getElementById("js-back")

  function excludeDomain(domain) {
    includeToSettingsArray(
      domain,
      settings.excluded_domains,
      "excluded_domains"
    )
  }

  function includeDomain(domain) {
    excludeFromSettingsArray(
      domain,
      settings.excluded_domains,
      "excluded_domains"
    )
  }

  backLink.onclick = () => {
    window.location = "./options_home.html"
  }

  let domainList = []
  // Get a list of domains
  hideesStore.forEach((hidee) => {
    if (!domainList.includes(hidee.domain)) {
      domainList.push(hidee.domain)
    }
  })

  domainList.forEach((domain) => {
    sitesContainer.appendChild(
      card(
        domain,
        hideesStore.filter((hidee) => {
          return hidee.domain === domain
        }).length
      )
    )
    handleToggle(
      document.getElementById(`toggle-${domain}`),
      !settings.excluded_domains.includes(domain),
      () => {
        includeDomain(domain)
      },
      () => {
        excludeDomain(domain)
      }
    )
  })

  function card(domain, numberOfHidees) {
    let container = document.createElement("div")
    container.innerHTML = `<a class="card" href="./site.html#${domain}"><div class="main vertical" id="${domain}"><h2>${domain}</h2><p>${numberOfHidees} sections hidden</p></div><div class="button-container"><button class="toggle" id="toggle-${domain}"><div class="left"></div><div class="right"></div></button></div></a>`

    return container
  }
})()
