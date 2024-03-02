export const urls = {
  getMainUrl: () => {
    return createAppUrl('/')
  },
  getRoomUrl: (roomId = ':roomId') => {
    return createAppUrl(`/r/${roomId}`)
  },
}

function createAppUrl(url: string) {
  return new URL(url, window.location.origin)
}
