$(document).ready(function() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyATntt0SKy2X7fI-sMyGZJoWBRO49p4zNA",
    authDomain: "simple-chat-de1c7.firebaseapp.com",
    databaseURL: "https://simple-chat-de1c7.firebaseio.com",
    projectId: "simple-chat-de1c7",
    storageBucket: "simple-chat-de1c7.appspot.com",
    messagingSenderId: "1045690062525"
  };
  firebase.initializeApp(config);


  var rootRef = firebase.database().ref();


  // On click button push item to FB database
  $('#send-btn').click(function() {
      var message = $('#message').text();
      // Pushes a new item to our Firebase database
      rootRef.push({
        specialMessage: message,
        //  myFavMusic: 'dub',
      });
  })





  // Function to add a data listener
  var startListening = function() {

    // When a new item is added to the FB database then do this...
    rootRef.on('child_added', function(ourDatabaseKid) {

      // Establish a name for each item/child
      var textInputFromUsers = ourDatabaseKid.val();
      var theActualMessage = textInputFromUsers.specialMessage;

      if (theActualMessage == 'red' || theActualMessage == 'RED') {
        $('#container').removeClass('black');
        $('#container').addClass('red');
      } else if (theActualMessage == 'black' || theActualMessage == 'BLACK') {
        $('#container').removeClass('red');
        $('#container').addClass('black');
      }
//      $('#storage').append('<div class="d">' + theActualMessage + '</div>')

    });


  };

  startListening();






});
