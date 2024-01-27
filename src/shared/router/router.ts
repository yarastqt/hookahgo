import { createHistoryRouter, createRoute } from 'atomic-router'
import { createBrowserHistory } from 'history'

export const routes = {
  main: createRoute<any>(),
  room: createRoute<{ roomId: string }>(),
}

export const router = createHistoryRouter({
  routes: [
    { path: '/', route: routes.main },
    { path: '/r/:roomId', route: routes.room },
  ],
})

export const history = createBrowserHistory()
