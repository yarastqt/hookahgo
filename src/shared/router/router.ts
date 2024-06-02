import { createHistoryRouter, createRoute } from 'atomic-router'
import { createBrowserHistory } from 'history'

import { AppUrl } from '@app/shared/urls'

export interface RoomRouteParams {
  roomId: string
}

export const routes = {
  main: createRoute(),
  room: createRoute<RoomRouteParams>(),
}

export const router = createHistoryRouter({
  routes: [
    { path: AppUrl.getMainUrl().pathname, route: routes.main },
    { path: AppUrl.getRoomUrl().pathname, route: routes.room },
  ],
})

export const history = createBrowserHistory()
