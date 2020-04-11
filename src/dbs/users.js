import { db } from '../firebase';

const userRef = db.collection("users");

export const createUser = user => {
  userRef.add({
    email: user.email,
  }).catch(function(error) {
    console.error("Error adding document: ", error);
  });
}
