import { createHistoryRouter, createRoute } from 'atomic-router'
import { createBrowserHistory } from 'history'

export interface RoomRouteParams {
  roomId: string
}

export const routes = {
  main: createRoute<any>(),
  room: createRoute<RoomRouteParams>(),
}

export const router = createHistoryRouter({
  routes: [
    { path: '/', route: routes.main },
    { path: '/r/:roomId', route: routes.room },
  ],
})

export const history = createBrowserHistory()
