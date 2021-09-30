var firebaseConfig = {
  apiKey: "AIzaSyBlWrcyE6WEui2jKCs0u-NpQANRlT-2ZtU",
  authDomain: "kwitter-project-4e217.firebaseapp.com",
  databaseURL: "https://kwitter-project-4e217-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-4e217",
  storageBucket: "kwitter-project-4e217.appspot.com",
  messagingSenderId: "446161258914",
  appId: "1:446161258914:web:b5b7996b6d4c9cf64a8afb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
