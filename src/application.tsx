import { RouterProvider } from 'atomic-router-react'
import { allSettled } from 'effector'
import { Provider } from 'effector-react'
import { createRoot } from 'react-dom/client'
import invariant from 'ts-invariant'

import { Screens } from '@app/screens'
import { appStarted, scope } from '@app/shared/config'
import '@app/shared/firebase'
import { history, router } from '@app/shared/router'

import './application/global.css'

async function render() {
  const root = document.getElementById('root')

  invariant(root)

  allSettled(appStarted, { scope: scope })
  allSettled(router.setHistory, { scope: scope, params: history })

  createRoot(root).render(
    <Provider value={scope}>
      <RouterProvider router={router}>
        <Screens />
      </RouterProvider>
    </Provider>,
  )
}

render()
