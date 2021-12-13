function findNextLink (): HTMLAnchorElement | null {
  return document.querySelector<HTMLAnchorElement>("a[rel='next']")
}

function findVideoElement (): HTMLVideoElement | null | undefined {
  const videoFrame = document.querySelector<HTMLIFrameElement>("#frameNewAnimeuploads0")
  if (videoFrame == null) return

  return videoFrame?.contentDocument?.querySelector<HTMLVideoElement>("video#video-js_html5_api")
}

function withEventListener(video: HTMLVideoElement , callback: () => void): void {
  const nextLink = findNextLink()

  callback()

  if (nextLink) {
    video.addEventListener('ended', () => {
      window.location.href = nextLink.href
    }, false);
  }
}

export function playVideoAndSetListener () {
  const video = findVideoElement()
  if (video == null) return

  withEventListener(video, () => {
    video.play().then(() => video.requestFullscreen())
  })
}
