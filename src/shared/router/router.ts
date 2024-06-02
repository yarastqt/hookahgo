import { createHistoryRouter, createRoute, redirect } from 'atomic-router'
import { createBrowserHistory } from 'history'

import { AppUrl } from '@app/shared/urls'

export interface RoomRouteParams {
  roomId: string
}

export const routes = {
  main: createRoute(),
  room: createRoute<RoomRouteParams>(),
  notFound: createRoute(),
}

export const router = createHistoryRouter({
  routes: [
    { path: AppUrl.getMainUrl().pathname, route: routes.main },
    { path: AppUrl.getRoomUrl().pathname, route: routes.room },
    { path: AppUrl.getNotFoundUrl().pathname, route: routes.notFound },
  ],
  notFoundRoute: routes.notFound,
})

export const history = createBrowserHistory()

redirect({
  clock: router.routeNotFound,
  route: routes.notFound,
})
