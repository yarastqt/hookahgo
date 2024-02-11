import { FieldValue } from 'firebase/firestore'

export enum RoomStatus {
  Pending = 'pending',
  Accepted = 'accepted',
  Rejected = 'rejected',
}

export interface RoomPayload {
  createdAt: FieldValue
  status: RoomStatus
}

export interface RoomDocument {
  createdAt: unknown
  status: RoomStatus
}

export interface Room {
  createdAt: unknown
  status: RoomStatus
}
