var firebaseConfig = {
      apiKey: "AIzaSyDs1kgMLMlqIXjQ--cvhPdH9no7UtLp_Uc",
      authDomain: "orionus-82de9.firebaseapp.com",
      databaseURL: "https://orionus-82de9-default-rtdb.firebaseio.com",
      projectId: "orionus-82de9",
      storageBucket: "orionus-82de9.appspot.com",
      messagingSenderId: "725640852491",
      appId: "1:725640852491:web:606e74eb384aad52cd830e"
};
//YOUR FIREBASE LINKS
Rn = localStorage.getItem("RoomName");
un = localStorage.getItem("Username!");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function SendMSG() {
      msg = document.getElementById("MSG").value;
      document.getElementById("MSG").value = "";
      localStorage.setItem("Message:", msg);  
      firebase.database().ref(Rn).push({
            name: un,
            message: msg,
            like: 0
      });
}
function L0G(){
      localStorage.removeItem("USER!!");
      localStorage.removeItem("Username!");
      localStorage.removeItem("RoomName");
      localStorage.removeItem("Message:");
      window.location = "index.html";     
}
