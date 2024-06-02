import { createHistoryRouter, createRoute } from 'atomic-router'
import { createBrowserHistory } from 'history'

import { urls } from '@app/shared/urls'

export interface RoomRouteParams {
  roomId: string
}

export const routes = {
  main: createRoute(),
  room: createRoute<RoomRouteParams>(),
}

export const router = createHistoryRouter({
  routes: [
    { path: urls.getMainUrl().pathname, route: routes.main },
    { path: urls.getRoomUrl().pathname, route: routes.room },
  ],
})

export const history = createBrowserHistory()
