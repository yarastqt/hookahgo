import { createRouteView } from 'atomic-router-react'

import { routes } from '@app/shared/router'

import { roomScreenLoadedRoute } from './model'
import { RoomScreen as view } from './room-screen'

export const RoomScreen = {
  view: createRouteView<unknown, {}, {}>({
    route: roomScreenLoadedRoute,
    view: view,
  }),
  route: routes.room,
}
