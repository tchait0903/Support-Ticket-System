var uid;
var email;

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    uid = user.uid;
    email = user.email;
    console.log(uid);
    console.log(email);
    // ...


  } else {
    // User is signed out
    // ...

  }


});

function firebaseSignOut() {
  firebase.auth().signOut().then(() => {
    console.log("user signed out successfully");
    // Sign-out successful.
  }).catch((error) => {
    console.log("error occurred signing user out");
    // An error happened.
  });
}
