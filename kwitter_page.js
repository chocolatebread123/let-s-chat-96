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

   user_name=localStorage.getItem("user_name");
   room_name=localStorage.getItem("room_name");
   function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
   }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code


//End code
    } });  }); }
getData();
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}