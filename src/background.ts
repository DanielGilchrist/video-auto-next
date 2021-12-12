import { findNextLink, findVideoElement } from "./helpers/wcostream"

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status == 'complete' && tab.active) {
    const video = findVideoElement()
    if (video == null) return

    const nextLink = findNextLink()

    video.play().then(() => video.requestFullscreen());

    if (nextLink) {
      video.addEventListener('ended', () => {
        window.location.href = nextLink.href
      }, false);
    }
  }
})
