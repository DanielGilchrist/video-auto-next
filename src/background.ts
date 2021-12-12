document.getElementById('video-js_html5_api').addEventListener('ended', () {
  const nextLink = document.querySelector('a[rel]');
}, false);

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {
    const videoFrame = document.querySelector("#frameNewAnimeuploads0")
    const video = videoFrame.contentDocument.querySelector("video#video-js_html5_api")
    const videoRoot = video.parentElement
    const nextLink = document.querySelector("a[rel='next']")

    video.play().then(() => {
      const fullscreenButton = videoRoot.querySelector("button.vjs-fullscreen-control")
      if (fullscreenButton == null) {
        return
      }

      fullscreenButton.click()
    });

    if (nextLink) {
      video.addEventListener('ended', () => {
        window.location.href = nextLink.href
      }, false);
    }
  }
})
