import { RouterProvider } from 'atomic-router-react'
import { allSettled } from 'effector'
import { Provider } from 'effector-react'
import { createRoot } from 'react-dom/client'

import { Screens } from '@app/screens'
import { appStarted, scope } from '@app/shared/config'
import '@app/shared/firebase'
import { history, router } from '@app/shared/router'

import './application/global.css'

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
