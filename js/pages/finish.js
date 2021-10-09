document.getElementById("js-finish").onclick = function () {
  window.close()
}

if (window.location.hash) {
  let name = decodeURI(window.location.hash.slice(1))
  document.getElementById(
    "js-name"
  ).innerText = `Congratulations ${name}, you're all set!
  `
}
