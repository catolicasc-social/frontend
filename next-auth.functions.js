require('dotenv').load()

// This config file uses MongoDB for User accounts, as well as session storage.
// This config includes options for NeDB, which it defaults to if no DB URI 
// is specified. NeDB is an in-memory only database intended here for testing.
const firebaseModule = require('firebase')

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: "igdata-66f1b",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

module.exports = () => {
  return new Promise((resolve, reject) => {
    if (process.env.FIREBASE_API_KEY) { 
      firebase = firebaseModule.initializeApp(firebaseConfig);

      firebase.firestore().collection('users').get().then(snapshot => { 
        const users = []
        snapshot.forEach(user => { users.push(user.data().email) })
        resolve(users) 
      })

    } else {
      // If no MongoDB URI string specified, use NeDB, an in-memory work-a-like.
      // NeDB is not persistant and is intended for testing only.
      const collection = new NeDB({ autoload: true })
      collection.loadDatabase(err => {
        if (err) return reject(err)
        return resolve(collection)
      })
    }  
  })
  .then(usersEmail => {
    return Promise.resolve({
      // If a user is not found find() should return null (with no error).
      find: ( {email, provider} = {}) => {
        return new Promise((resolve, reject) => {
          if (usersEmail.indexOf(email) > -1) {
            return resolve(provider)
          }
          return reject(new Error("Usuário não autorizado"))
        })
      },
      // The user parameter contains a basic user object to be added to the DB.
      // The oAuthProfile parameter is passed when signing in via oAuth.
      //
      // The optional oAuthProfile parameter contains all properties associated
      // with the users account on the oAuth service they are signing in with.
      //
      // You can use this to capture profile.avatar, profile.location, etc.
      insert: user => {
        return new Promise(resolve => {
          const userRef = firebase.firestore().collection('users').doc(profile.emails[0].value)
          userRef.get()
          .then(doc => {
            userRef.set(
              {
                id: doc.id,
                googleId: user.id,
                name: profile.displayName,
                email: profile.emails[0].value,
                imgUrl: profile.photos[0].value
              }, { merge: true 
            })
            return resolve(user)
          })
        })
      },
      // The user parameter contains a basic user object to be added to the DB.
      // The oAuthProfile parameter is passed when signing in via oAuth.
      //
      // The optional oAuthProfile parameter contains all properties associated
      // with the users account on the oAuth service they are signing in with.
      //
      // You can use this to capture profile.avatar, profile.location, etc.
      update: (user, profile) => {
        return new Promise(resolve => {
          const userRef = firebase.firestore().collection('users').doc(profile.emails[0].value)
          userRef.get()
          .then(doc => {
            userRef.set(
              {
                id: doc.id,
                googleId: user.id,
                name: profile.displayName,
                email: profile.emails[0].value,
                imgUrl: profile.photos[0].value
              }, { merge: true 
            })
            return resolve(user)
          })
        })
      },
      // The remove parameter is passed the ID of a user account to delete.
      //
      // This method is not used in the current version of next-auth but will
      // be in a future release, to provide an endpoint for account deletion.
      remove: id => {
        return new Promise(resolve => {
            return resolve(true)
        })
      },
      // Seralize turns the value of the ID key from a User object
      serialize: user => {
        // Supports serialization from Mongo Object *and* deserialize() object
        if (!user.id) return Promise.reject(new Error("Unable to serialise user"))
        
        return Promise.resolve(user.id)
      },
      // Deseralize turns a User ID into a normalized User object that is
      // exported to clients. It should not return private/sensitive fields,
      // only fields you want to expose via the user interface.
      deserialize: id => {
        return new Promise(resolve => {
          firebase.firestore().collection('users').where('googleId', '==', id).get()
          .then(docs => { 
            let user = {} 
            docs.forEach(doc => { user = doc.data() })

            // If user not found (e.g. account deleted) return null object
            if (!user) return resolve(null)

            return resolve({
              id: user.id, 
              googleId: user.googleId,
              name: user.name, 
              email: user.email, 
              emailVerified: user.emailVerified, 
              admin: user.admin,
              imgUrl: user.imgUrl
            })
          })
        })
      }
    })
  })
}