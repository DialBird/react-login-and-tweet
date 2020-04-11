import { db } from '../firebase';

const userRef = db.collection("users");

export const createUser = user => {
  userRef.add({
    email: user.email,
  }).catch(function(error) {
    console.error("Error adding document: ", error);
  });
}

export const updateUserTwitter = (id, credential) => {
  const { access_key, access_secret } = credential;
  userRef.doc(id).update({
    twitter_access_key: access_key,
    twitter_access_secret: access_secret
  }).catch(function(error) {
    console.error("Error adding document: ", error);
  });
};
