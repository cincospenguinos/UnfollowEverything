var firebaseConfig = {
  apiKey: "AIzaSyDaEM3PJemN7gvjOYPShJnwwo5aPerxPeE",
  authDomain: "unweb-auth-1590063427142.firebaseapp.com",
  databaseURL: "https://unweb-auth-1590063427142.firebaseio.com",
  projectId: "unweb-auth-1590063427142",
  storageBucket: "unweb-auth-1590063427142.appspot.com",
  messagingSenderId: "847582719201",
  appId: "1:847582719201:web:7b2d90b568e62c2fee1ba0",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

var provider = new firebase.auth.GoogleAuthProvider()

document.getElementById("js-signin").onclick = function () {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken
      // The signed-in user info.
      var user = result.user
      window.location = `./finished.html#${encodeURI(user.displayName)}`
      // ...
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code
      var errorMessage = error.message
      // The email of the user's account used.
      var email = error.email
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential
      // ...
    })
}

// firebase
//   .auth()
//   .signOut()
//   .then(function () {
//     // Sign-out successful.
//   })
//   .catch(function (error) {
//     // An error happened.
//   })
