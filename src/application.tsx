import './application/global.css'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'atomic-router-react'
import { allSettled, fork } from 'effector'
import { Provider } from 'effector-react'

import { Screens } from '@app/screens'
import { router, history } from '@app/shared/router'

const scope = fork()

allSettled(router.setHistory, { scope, params: history })

createRoot(document.getElementById('root')!).render(
  <Provider value={scope}>
    <RouterProvider router={router}>
      <Screens />
    </RouterProvider>
  </Provider>,
)
