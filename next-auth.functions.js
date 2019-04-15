/* eslint-disable global-require */

require('dotenv').load();

const firebaseModule = require('firebase');

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: 'igdata-66f1b',
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

module.exports = () => {
  return new Promise((resolve, reject) => {
    if (process.env.FIREBASE_API_KEY) {
      firebase = firebaseModule.initializeApp(firebaseConfig);

      firebase
        .firestore()
        .collection('users')
        .get()
        .then(snapshot => {
          const users = [];
          snapshot.forEach(user => {
            users.push(user.data().email);
          });
          resolve(users);
        });
    } else {
      const collection = new NeDB({ autoload: true });
      collection.loadDatabase(err => {
        if (err) return reject(err);
        return resolve(collection);
      });
    }
  }).then(usersEmail => {
    return Promise.resolve({
      find: ({ email, provider } = {}) => {
        return new Promise((resolve, reject) => {
          if (usersEmail.indexOf(email) > -1) {
            return resolve(provider);
          }
          return reject(new Error('Usuário não autorizado'));
        });
      },
      insert: user => {
        return new Promise(resolve => {
          const userRef = firebase
            .firestore()
            .collection('users')
            .doc(profile.emails[0].value);
          userRef.get().then(doc => {
            userRef.set(
              {
                id: doc.id,
                googleId: user.id,
                name: profile.displayName,
                email: profile.emails[0].value,
                imgUrl: profile.photos[0].value
              },
              { merge: true }
            );
            return resolve(user);
          });
        });
      },
      update: (user, profile) => {
        return new Promise(resolve => {
          const userRef = firebase
            .firestore()
            .collection('users')
            .doc(profile.emails[0].value);
          userRef.get().then(doc => {
            userRef.set(
              {
                id: doc.id,
                googleId: user.id,
                name: profile.displayName,
                email: profile.emails[0].value,
                imgUrl: profile.photos[0].value
              },
              { merge: true }
            );
            return resolve(user);
          });
        });
      },
      remove: () => {
        return new Promise(resolve => {
          return resolve(true);
        });
      },
      serialize: user => {
        if (!user.id)
          return Promise.reject(new Error('Unable to serialise user'));

        return Promise.resolve(user.id);
      },
      deserialize: id => {
        return new Promise(resolve => {
          firebase
            .firestore()
            .collection('users')
            .where('googleId', '==', id)
            .get()
            .then(docs => {
              let user = {};
              docs.forEach(doc => {
                user = doc.data();
              });

              if (!user) return resolve(null);

              return resolve({
                id: user.id,
                googleId: user.googleId,
                name: user.name,
                email: user.email,
                emailVerified: user.emailVerified,
                admin: user.admin,
                imgUrl: user.imgUrl
              });
            });
        });
      }
    });
  });
};
