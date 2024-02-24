import { createEffect } from 'effector'

export const shareOrCopyUrlFx = createEffect((url: string) => {
  if (isShareAvailable()) {
    try {
      return shareUrl(url)
    } catch {
      return copyUrlToClipboard(url)
    }
  }

  return copyUrlToClipboard(url)
})

function isShareAvailable() {
  return typeof window.navigator.share === 'function'
}

function shareUrl(url: string) {
  return window.navigator.share({ url })
}

function copyUrlToClipboard(url: string) {
  return navigator.clipboard.writeText(url)
}
