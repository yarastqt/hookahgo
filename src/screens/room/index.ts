import { createRouteView } from 'atomic-router-react'

import { routes } from '@app/shared/router'

import { RoomScreen as view } from './room-screen'
import { roomScreenLoadedRoute } from './model'
import { ScreenSkeleton } from './ui/screen-skeleton'

export const RoomScreen = {
  view: createRouteView<unknown, {}, {}>({
    route: roomScreenLoadedRoute,
    view: view,
    otherwise: ScreenSkeleton,
  }),
  route: routes.room,
}
