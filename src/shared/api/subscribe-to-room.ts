import { doc, onSnapshot } from 'firebase/firestore'
import invariant from 'ts-invariant'

import { scope } from '@app/shared/config'
import { firebaseModel } from '@app/shared/firebase'

import { Table } from './tables'
import { type Room, type RoomDocument, type RoomId } from './types'

export function subscribeToRoom(payload: {
  params: { roomId: RoomId }
  onData: (room: Room) => void
}) {
  const firestore = scope.getState(firebaseModel.$firestore)

  invariant(firestore)

  const roomRef = doc(firestore, Table.Rooms, payload.params.roomId)

  return onSnapshot(roomRef, (roomDocument) => {
    const room = roomDocument.data() as RoomDocument

    payload.onData({ ...room, id: roomRef.id })
  })
}
