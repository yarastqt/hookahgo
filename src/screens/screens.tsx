import { createRoutesView } from 'atomic-router-react'

import { MainLayout } from '@app/layouts/main-layout'

import { MainScreen } from './main'
import { NotFoundScreen } from './not-found'
import { RoomScreen } from './room'

const RoutesView = createRoutesView({
  routes: [MainScreen, RoomScreen, NotFoundScreen],
  otherwise: NotFoundScreen.view,
})

export const Screens = () => {
  return (
    <MainLayout>
      <RoutesView />
    </MainLayout>
  )
}
