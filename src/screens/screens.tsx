import { createRoutesView } from 'atomic-router-react'
import { MainLayout } from '@app/layouts/main-layout'

import { MainScreen } from './main'
import { RoomScreen } from './room'

const RoutesView = createRoutesView({
  routes: [MainScreen, RoomScreen],
})

export const Screens = () => {
  return (
    <MainLayout>
      <RoutesView />
    </MainLayout>
  )
}
