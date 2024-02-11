import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import invariant from 'ts-invariant'

import { scope } from '@app/shared/config'
import { firebaseModel } from '@app/shared/firebase'

import { Table } from './tables'
import { type RoomPayload, RoomStatus } from './types'

export function createRoom() {
  const firestore = scope.getState(firebaseModel.$firestore)

  invariant(firestore)

  const roomsRef = collection(firestore, Table.Rooms)

  return addDoc(roomsRef, {
    createdAt: serverTimestamp(),
    status: RoomStatus.Pending,
  } satisfies RoomPayload)
}
