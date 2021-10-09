// Files that need caching
var filesToCache = ["newcirclewhite.svg"]

// Cache images
filesToCache.forEach(function(imageUrl) {
  var image = new Image()
  image.src = chrome.extension.getURL(`img/${imageUrl}`)
})
