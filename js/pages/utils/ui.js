function handleCheckbox(checkboxEl, checked, onTrue, onFalse) {
  checkboxEl.checked = checked
  checkboxEl.onclick = function () {
    if (checked) {
      checked = false
      onFalse()
    } else {
      checked = true
      onTrue()
    }
  }
}

function handleToggle(toggleEl, checked, onTrue, onFalse) {
  log(toggleEl)
  const left = toggleEl.children[0]
  const right = toggleEl.children[1]
  if (checked) {
    toggleClass(right, "on")
  } else {
    toggleClass(left, "on")
  }
  toggleEl.onclick = function (e) {
    e.preventDefault()
    if (checked) {
      checked = false
      toggleClass(left, "on")
      toggleClass(right, "on")
      onFalse()
    } else {
      checked = true
      toggleClass(left, "on")
      toggleClass(right, "on")
      onTrue()
    }
  }
}

function toggleClass(el, className) {
  if (el.classList) {
    el.classList.toggle(className)
  } else {
    var classes = el.className.split(" ")
    var existingIndex = classes.indexOf(className)
    if (existingIndex >= 0) classes.splice(existingIndex, 1)
    else classes.push(className)
    el.className = classes.join(" ")
  }
}
