// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDQ0EOba-zjTw3RwAvgEuLm0WpdaUraErA',
  authDomain: 'house-marketplace-app1-4aa7f.firebaseapp.com',
  projectId: 'house-marketplace-app1-4aa7f',
  storageBucket: 'house-marketplace-app1-4aa7f.appspot.com',
  messagingSenderId: '132173243028',
  appId: '1:132173243028:web:87d0675ae46697fea40a81',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
