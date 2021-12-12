export function findNextLink (): HTMLAnchorElement | null {
  return document.querySelector<HTMLAnchorElement>("a[rel='next']")
}

export function findVideoElement (): HTMLVideoElement | null | undefined {
  const videoFrame = document.querySelector<HTMLIFrameElement>("#frameNewAnimeuploads0")
  if (videoFrame == null) return

  return videoFrame?.contentDocument?.querySelector<HTMLVideoElement>("video#video-js_html5_api")
}
