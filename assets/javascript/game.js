$(document).ready(function () {

  //test crystals
  // $( "#cry1" ).click(function() {
  //     alert( "Handler for .click() called." );
  //   });


  //   $( "#cry2" ).click(function() {
  //     alert( "Handler for .click() called." );
  //   });

  //   $( "#cry3" ).click(function() {
  //     alert( "Handler for .click() called." );
  //   });

  //   $( "#cry4" ).click(function() {
  //     alert( "Handler for .click() called." );
  //   });


  var randomNumber = Math.floor(Math.random() * 11 + 1);
  var randomNumber2 = Math.floor(Math.random() * 11 + 1);
  var randomNumber3 = Math.floor(Math.random() * 11 + 1);
  var randomNumber4 = Math.floor(Math.random() * 11 + 1);
  var computerNumber = Math.floor(Math.random() * 101 + 19);

  console.log(randomNumber);
  console.log(randomNumber2);
  console.log(randomNumber3);
  console.log(randomNumber4);
  console.log(computerNumber);




  var wins = 0;
  var losses = 0;
  var totalscore = 0;

  $("#wins").text("Wins: " + wins);
  $("#losses").text("Losses: " + losses);
  $(".total-score").text(totalscore)
  $(".random-number").text(computerNumber)



  // $ tells javascript its a jquery thing
  // "cry1" is the id on html
  // .on("click") says do something when #1 is clicked

  $("#cry1").on("click", function () {

    totalscore = totalscore + randomNumber;
    console.log("score is " + totalscore);
    $(".total-score").text(totalscore);

     winAndLose();
  });

  $("#cry2").on("click", function () {

    totalscore = totalscore + randomNumber2;
    console.log("score is " + totalscore);
    $(".total-score").text(totalscore);

     winAndLose();
  });

  $("#cry3").on("click", function () {

    totalscore = totalscore + randomNumber3;
    console.log("score is " + totalscore);
    $(".total-score").text(totalscore);

     winAndLose();
  });

  $("#cry4").on("click", function () {

    totalscore = totalscore + randomNumber4;
    console.log("score is " + totalscore);
    $(".total-score").text(totalscore);

     winAndLose();
  });



  function winAndLose() {

    if (totalscore === computerNumber) {
        wins++;
        $('#wins').text('Wins: ' + wins);
        reset();
        
    } else if (totalscore > computerNumber){
        losses++;
        $('#losses').text('Losses: ' + losses);
        reset();
    }
    
}




function reset (){
  computerNumber = Math.floor(Math.random() * 101 + 19);
  randomNumber = Math.floor(Math.random() * 11 + 1);
  randomNumber2 = Math.floor(Math.random() * 11 + 1);
  randomNumber3 = Math.floor(Math.random() * 11 + 1);
  randomNumber4 = Math.floor(Math.random() * 11 + 1);

  totalscore = 0;

  console.log(randomNumber);
  console.log(randomNumber2);
  console.log(randomNumber3);
  console.log(randomNumber4);

  $('.total-score').text(totalscore);
  $('#wins').text('wins: ' + wins);
  $('#losses').text('losses: ' + losses);
  $('.random-number').text(computerNumber);

}













});