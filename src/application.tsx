import './application/global.css'
import { createRoot } from 'react-dom/client'

import { MainScreen } from './screens/main'

createRoot(document.getElementById('root')!).render(<MainScreen />)
