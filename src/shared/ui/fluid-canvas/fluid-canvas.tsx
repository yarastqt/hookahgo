import { FC, useEffect, useRef } from 'react'
import Fluid from 'webgl-fluid-enhanced'

import styles from './fluid-canvas.module.css'
import { fluidConfig } from './fluid-config'

export const FluidCanvas: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) {
      return
    }

    Fluid.simulation(canvasRef.current, fluidConfig)
  }, [])

  return <canvas className={styles.root} ref={canvasRef} />
}
