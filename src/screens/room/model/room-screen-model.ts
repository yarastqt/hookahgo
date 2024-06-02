import { RouteParamsAndQuery, chainRoute } from 'atomic-router'
import { attach, createEffect, createEvent, createStore, sample, scopeBind } from 'effector'

import {
  type Room,
  RoomStatus,
  type Unsubscribe,
  type UpdateRoomStatusParams,
  api,
} from '@app/shared/api'
import { scope } from '@app/shared/config'
import { routes } from '@app/shared/router'
import { RoomRouteParams } from '@app/shared/router/router'

const $subscribeRef = createStore<Unsubscribe | null>(null)
const $room = createStore<Room | null>(null)
const $isToastOpen = createStore(false)

const roomUpdated = createEvent<Room>()
const acceptPressed = createEvent()
const rejectPressed = createEvent()
const closeToastPressed = createEvent()

const subscribeToRoomFx = createEffect((input: RouteParamsAndQuery<RoomRouteParams>) => {
  return api.subscribeToRoom({
    params: { roomId: input.params.roomId },
    onData: scopeBind(roomUpdated, { scope }),
  })
})

const unsubscribeToRoomFx = attach({
  source: $subscribeRef,
  effect: (unsubscribe) => {
    unsubscribe?.()
  },
})

const updateRoomStatusFx = createEffect((params: UpdateRoomStatusParams) => {
  return api.updateRoomStatus(params)
})

export const roomScreenLoadedRoute = chainRoute({
  route: routes.room,
  beforeOpen: subscribeToRoomFx,
})

sample({
  clock: subscribeToRoomFx.doneData,
  target: $subscribeRef,
})

sample({
  clock: roomUpdated,
  target: $room,
})

sample({
  clock: acceptPressed,
  source: $room,
  filter: Boolean,
  fn: (room): UpdateRoomStatusParams => ({
    roomId: room.id,
    status: RoomStatus.Accepted,
  }),
  target: updateRoomStatusFx,
})

sample({
  clock: rejectPressed,
  source: $room,
  filter: Boolean,
  fn: (room): UpdateRoomStatusParams => ({
    roomId: room.id,
    status: RoomStatus.Rejected,
  }),
  target: updateRoomStatusFx,
})

sample({
  clock: updateRoomStatusFx.done,
  fn: () => true,
  target: $isToastOpen,
})

sample({
  clock: closeToastPressed,
  fn: () => false,
  target: $isToastOpen,
})

sample({
  clock: roomScreenLoadedRoute.closed,
  target: [unsubscribeToRoomFx, $room.reinit],
})

export const roomScreenModel = {
  $isToastOpen,
  $room,
  acceptPressed,
  closeToastPressed,
  rejectPressed,
}
