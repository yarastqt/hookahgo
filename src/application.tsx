import './application/global.css'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'atomic-router-react'
import { allSettled } from 'effector'
import { Provider } from 'effector-react'

import { Screens } from '@app/screens'
import { router, history } from '@app/shared/router'
import { appStarted, scope } from '@app/shared/config'
import '@app/shared/firebase'

async function render() {
  allSettled(appStarted, { scope: scope })
  allSettled(router.setHistory, { scope: scope, params: history })

  createRoot(document.getElementById('root')!).render(
    <Provider value={scope}>
      <RouterProvider router={router}>
        <Screens />
      </RouterProvider>
    </Provider>,
  )
}

render()
