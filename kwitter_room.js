var firebaseConfig = {
      apiKey: "AIzaSyDs1kgMLMlqIXjQ--cvhPdH9no7UtLp_Uc",
      authDomain: "orionus-82de9.firebaseapp.com",
      databaseURL: "https://orionus-82de9-default-rtdb.firebaseio.com",
      projectId: "orionus-82de9",
      storageBucket: "orionus-82de9.appspot.com",
      messagingSenderId: "725640852491",
      appId: "1:725640852491:web:606e74eb384aad52cd830e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
UNVar = localStorage.getItem("Username!");
document.getElementById ("unV").innerHTML="Welcome "+UNVar+"!!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
   
      //Start code

      //End code
      });});}
getData();
