






$(document).ready(function() {


 var fun = [ "lol", "lmaoooo", "true true", "lmaooooooo", "lololololololollol", "okay okay", "oooooof", "no youre drunk" ];


 function randomItem(index) {
   return Math.floor(Math.random() * index.length);
 }

    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyApq6BL_akyEpA5ZjAsNSMWK5fGo2RZgh0",
    authDomain: "partytime-2f24f.firebaseapp.com",
    databaseURL: "https://partytime-2f24f.firebaseio.com",
    projectId: "partytime-2f24f",
    storageBucket: "partytime-2f24f.appspot.com",
    messagingSenderId: "256134088756"
  };
  firebase.initializeApp(config);


  // Establish to identify which branch of our Firebase Database
  var mainBranch = firebase.database().ref();

  // Send Data to Firebase
  $('#send-button').click(function() {
    var drunkResponse = $('#message-response').text();
    var user1Message = $('#message-box').text();
    mainBranch.push({
      response : drunkResponse,
      message : user1Message
    });




    // Empty out the divs
    $('#message-box').html('');

  })

  // Recieve Data from Firebase
  var getDataFromFirebase = function() {
    mainBranch.on('child_added', function(myFirebaseItem) {

      // Access the child of the main branch
      var firebaseChild = myFirebaseItem.val();

      // Get the message metadata
      var user1Message = firebaseChild.message;

      // Get the response metadata
      var drunkResponse = firebaseChild.response;


      // $('#messages').append(userMessage + ' by ' + userName);
        $('#messages').prepend('<div class="drunkmessage">' + user1Message + " " + drunkResponse  + '</div>');
      $('#messages').prepend('<div class="sobermessage">' + user1Message + " " + drunkResponse  + fun[randomItem(fun)] + '</div>');
      $('#messages').prepend('<div class="sobermessage">' + user1Message + " " + drunkResponse  + fun[randomItem(fun)] +'</div>');


    });
  }

  getDataFromFirebase();





});
