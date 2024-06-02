export const AppUrl = {
  getMainUrl: () => {
    return createAppUrl('/')
  },
  getRoomUrl: (roomId = ':roomId') => {
    return createAppUrl(`/r/${roomId}`)
  },
  getNotFoundUrl: () => {
    return createAppUrl('/404')
  },
}

function createAppUrl(url: string) {
  return new URL(url, window.location.origin)
}
