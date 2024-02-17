import { createEffect, sample, createStore, attach, createEvent, scopeBind } from 'effector'
import { RouteParamsAndQuery, chainRoute } from 'atomic-router'

import {
  type Room,
  RoomStatus,
  type Unsubscribe,
  api,
  type UpdateRoomStatusParams,
} from '@app/shared/api'
import { routes } from '@app/shared/router'
import { RoomRouteParams } from '@app/shared/router/router'
import { scope } from '@app/shared/config'

const $subscribeRef = createStore<Unsubscribe | null>(null)
const $room = createStore<Room | null>(null)

const roomUpdated = createEvent<Room>()
const acceptPressed = createEvent()
const rejectPressed = createEvent()

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
  clock: roomScreenLoadedRoute.closed,
  target: [unsubscribeToRoomFx, $room.reinit],
})

export const roomScreenModel = {
  $room,
  acceptPressed,
  rejectPressed,
}
