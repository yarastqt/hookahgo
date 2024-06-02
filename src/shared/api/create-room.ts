import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import invariant from 'ts-invariant'

import { scope } from '@app/shared/config'
import { firebaseModel } from '@app/shared/firebase'

import { Table } from './tables'
import { type RoomPayload, RoomStatus } from './types'

export async function createRoom() {
  const firestore = scope.getState(firebaseModel.$firestore)

  invariant(firestore)

  const roomsRef = collection(firestore, Table.Rooms)

  const room = await addDoc(roomsRef, {
    createdAt: serverTimestamp(),
    status: RoomStatus.Pending,
  } satisfies RoomPayload)

  return room.id
}
