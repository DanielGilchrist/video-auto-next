window.onload = () => {
  var videoFrame = document.querySelector("#frameNewAnimeuploads0")
  // if (videoFrame == null) return

  var contentDocument = videoFrame.contentDocument
  // if (contentDocument == null) return

  var videoSelector = "video#video-js_html5_api"
  var video = contentDocument.querySelector(videoSelector)
  // if (video == null) return

  var nextLink = document.querySelector("a[rel='next']")

  // video.setAttribute("muted", "true")
  // video.load()
  // video
  //   .play()
  //   .then(() => video.requestFullscreen())
  contentDocument.querySelector(".vjs-big-play-button").click()
  document.querySelector(".vjs-fullscreen-control").click()
  // if (nextLink) {
  //   video.addEventListener("ended", function () {
  //     window.location.href = nextLink.href
  //   }, false)
  // }
}
