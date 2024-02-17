import { updateDoc, doc } from 'firebase/firestore'
import invariant from 'ts-invariant'

import { scope } from '@app/shared/config'
import { firebaseModel } from '@app/shared/firebase'

import { Table } from './tables'
import { type RoomPayload, RoomStatus, type RoomId } from './types'

export interface UpdateRoomStatusParams {
  roomId: RoomId
  status: RoomStatus
}

export async function updateRoomStatus(params: UpdateRoomStatusParams) {
  const firestore = scope.getState(firebaseModel.$firestore)

  invariant(firestore)

  const roomRef = doc(firestore, Table.Rooms, params.roomId)

  await updateDoc(roomRef, {
    status: params.status,
  } satisfies Pick<RoomPayload, 'status'>)

  return params
}
