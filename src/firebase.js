import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBUHUZD3mwVhmMFX1jo1ieusGHcgzLM30c",
  authDomain: "file-sharing-web.firebaseapp.com",
  projectId: "file-sharing-web",
  storageBucket: "file-sharing-web.appspot.com",
  messagingSenderId: "272399786326",
  appId: "1:272399786326:web:daf42de63eaa842b7036f7"
})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}
export default app
