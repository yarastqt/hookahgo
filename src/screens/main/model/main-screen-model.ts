import { RoomId, api } from '@app/shared/api'
import { createEffect, createEvent, createStore, sample } from 'effector'

const $createdRoomId = createStore<RoomId | null>(null)

const createRoomPressed = createEvent()

const createRoomFx = createEffect(() => {
  return api.createRoom()
})

const $isRoomCreating = createRoomFx.pending

sample({
  clock: createRoomPressed,
  filter: $isRoomCreating.map((isRoomCreating) => !isRoomCreating),
  target: createRoomFx,
})

sample({
  clock: createRoomFx.doneData,
  target: $createdRoomId,
})

export const mainScreenModel = {
  $createdRoomId,
  $isRoomCreating,
  createRoomPressed,
}
