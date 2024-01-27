import { Route } from 'atomic-router-react'
import { routes } from '@app/shared/router'

import { MainScreen } from './main'
import { RoomScreen } from './room'

export const Screens = () => {
  return (
    <>
      <Route view={MainScreen} route={routes.main} />
      <Route view={RoomScreen} route={routes.room} />
    </>
  )
}
