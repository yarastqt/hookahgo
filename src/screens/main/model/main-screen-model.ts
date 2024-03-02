import { createEffect, createEvent, createStore, sample } from 'effector'

import { RoomId, api } from '@app/shared/api'
import { shareOrCopyUrlFx } from '@app/shared/lib/effector-share'
import { urls } from '@app/shared/urls'

const $createdRoomId = createStore<RoomId | null>(null)

const createRoomPressed = createEvent()
const toastPressed = createEvent()

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

sample({
  clock: toastPressed,
  source: $createdRoomId,
  filter: Boolean,
  fn: (roomId) => urls.getRoomUrl(roomId).href,
  target: shareOrCopyUrlFx,
})

export const mainScreenModel = {
  $createdRoomId,
  $isRoomCreating,
  createRoomPressed,
  toastPressed,
}
