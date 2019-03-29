import 'firebase/firestore';

export default function loadFirebase() {
  const config = {
    apiKey: process.env.PROD_FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.PROD_FIREBASE_PROJECT_ID.toString(),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  if (!firebase.apps.length) firebase.initializeApp(config);

  return firebase;
}
