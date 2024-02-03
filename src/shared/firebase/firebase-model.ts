import { createEffect, createStore, sample } from 'effector'
import { FirebaseApp, initializeApp } from 'firebase/app'
import { Firestore, getFirestore } from 'firebase/firestore'

import { appStarted } from '@app/shared/config'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_PUBLIC_FIREBASE_APP_ID,
}

const createFirebaseFx = createEffect(() => {
  const firebase = initializeApp(firebaseConfig)
  const firestore = getFirestore(firebase)

  return { firebase, firestore }
})

const $firebase = createStore<FirebaseApp | null>(null)
const $firestore = createStore<Firestore | null>(null)

sample({
  clock: appStarted,
  target: createFirebaseFx,
})

sample({
  clock: createFirebaseFx.doneData,
  fn: (payload) => payload.firebase,
  target: $firebase,
})

sample({
  clock: createFirebaseFx.doneData,
  fn: (payload) => payload.firestore,
  target: $firestore,
})

export const firebaseModel = {
  $firebase,
  $firestore,
}
