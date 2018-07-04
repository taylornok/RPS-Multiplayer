  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCPzQOmp8TFf4FQX-q94axP4RIZb7k07N0",
    authDomain: "rps-multiplayer-7c2bc.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-7c2bc.firebaseio.com",
    projectId: "rps-multiplayer-7c2bc",
    storageBucket: "",
    messagingSenderId: "413973116890"
};
firebase.initializeApp(config)

//To be able to refer back to the firebase data
var database = firebase.database();
var connectionsRef = database.ref("/connections");

//Global variables
var p1Name = "";
var p2Name = "";
var p1Choice = "";
var p2Choice = "";


//Next lines will determine how the database is set once the users typ in thier name

$("#start").on("click", function(event) {
  //Don't refresh the page
  event.preventDefault();
  p1Name = $("#userName").val().trim();

  database.ref().set({
      p1name: p1Name
  });

  

});

database.ref().on("value", function(snapshot) {
    console.log(snapshot.val());
    console.log(snapshot.val().name);

    $("#p1Name").text("Welcome " + (snapshot.val().p1Name));

}, function(errorObject) {
    console.log("The read failed: " + errorObject.code);

});



  


