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
Un = localStorage.getItem("USER!!");
document.getElementById("PR").innerHTML = "Welcome" + Un + "!!";

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name=" + Room_names);
                  row = "<div  class = 'room_name' id = " + Room_names + " onclick = 'REDnr(this.id)' >#" + Room_names + " </div><hr>";
                  document.getElementById("TR").innerHTML += row;
                  //End code
            });
      });
}
getData();

function cliCk() {
      Room = document.getElementById("rooms").value;
      localStorage.setItem("RoomName", Room);
      firebase.database().ref("/").child(Room).update({
            purpose: "add Room"
      });
      window.location = "kwitter_page.html"
}

function REDnr(name) {
      console.log(name);
      localStorage.setItem("RoomName", name)
      window.location = "kwitter_page.html"
}

function LG() {
      localStorage.removeItem("USER!!");
      localStorage.removeItem("RoomName");
      window.location = "index.html";
}