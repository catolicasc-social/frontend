// import firebase from 'firebase/app'
import 'firebase/firestore'

export default function loadFirebase() {
  let config = null

  // Para verificar se tá em DEV
  console.log(process.env.NODE_ENV)

  config = {
    apiKey: process.env.PROD_FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.PROD_FIREBASE_PROJECT_ID.toString(),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  }
  
  if (!firebase.apps.length) firebase.initializeApp(config);

  return firebase
}


