const MOBILE_SCREEN_WIDTH = 700

export function useIsMobileDevice() {
  return window.screen.width <= MOBILE_SCREEN_WIDTH
}
