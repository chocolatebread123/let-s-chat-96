const firebaseConfig = {
      apiKey: "AIzaSyCIxHnhJfhD5fksULHwqGEu5FsVUQ8WfEQ",
      authDomain: "kwitter-new-96815.firebaseapp.com",
      databaseURL: "https://kwitter-new-96815-default-rtdb.firebaseio.com",
      projectId: "kwitter-new-96815",
      storageBucket: "kwitter-new-96815.appspot.com",
      messagingSenderId: "352079417743",
      appId: "1:352079417743:web:283a32cceb546d54d5fbfa"
    };
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name +" !";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_name+"</div><hr>"
      document.getElementById("output").innerHTML += row;


      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
