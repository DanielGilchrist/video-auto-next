chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status == 'complete' && tab.active) {
    const videoFrame = (document.querySelector("#frameNewAnimeuploads0") as HTMLIFrameElement)
    if (videoFrame == null) return

    const video = (videoFrame?.contentDocument?.querySelector("video#video-js_html5_api") as HTMLVideoElement)
    if (video == null) return

    const videoRoot = (video.parentElement as HTMLDivElement)
    if (videoRoot == null) return

    const nextLink = (document.querySelector("a[rel='next']") as HTMLAnchorElement)

    video.play().then(() => {
      const fullscreenButton = (videoRoot.querySelector("button.vjs-fullscreen-control") as HTMLButtonElement)
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
