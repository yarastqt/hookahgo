import { Button } from '@app/shared/ui'
import { HoverEvent } from '@react-aria/interactions'
import { FC } from 'react'
import { Title } from './ui/title'
import { Canvas } from './ui/canvas'

export const RoomScreen: FC = () => {
  const onHoverStart = (event: HoverEvent) => {
    const rect = event.target.getBoundingClientRect()

    const canvasHeight = document.body.offsetHeight
    const canvasWidth = document.body.offsetWidth

    const randX = getRandom(0, canvasWidth)
    const randY = getRandom(0, canvasHeight)

    const x = clamp(randX - rect.width - rect.x, 0, canvasWidth)
    const y = clamp(randY - rect.height - rect.y, 0, canvasHeight)

    event.target.style.transform = `translate3d(${x}px, ${y}px, 0)`
  }

  return (
    <Canvas>
      <Title />

      <Button>Да</Button>
      <Button onHoverStart={onHoverStart}>Нет</Button>
    </Canvas>
  )
}

function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function clamp(num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max)
}
