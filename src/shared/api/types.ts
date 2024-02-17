import { FieldValue } from 'firebase/firestore'

export type RoomId = string

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
  id: RoomId
  createdAt: unknown
  status: RoomStatus
}
