
var randomNumber;
var wins = 0;
var losses = 0;
var totalScore = 0;
var counter = 0;
var image = [
                src="assets/images/crystal1.jpg",
                src="assets/images/crystal2.jpeg" ,
                src="assets/images/crystal3.jpeg", 
                src="assets/images/crystal4.jpg" 

];

$(document).ready(function(){

    var startGameReset = function () {                                               //begining of "startGameReset" function.
        $(".crystals").empty();                                                       //empty all the crystals values

    randomNumber = Math.floor(Math.random() * (120 - 19) +1) +19;               
    console.log (randomNumber);                                                 //one random target number between (19-120)
    
    $(".randomNumber").text(randomNumber);                                      //writing the random target number on screen

    
    
    
    
    for(var i = 0; i < 4; i++){

        var randomCrystalnumber = Math.floor(Math.random() * 11) + 1;                //// 4 random crystal numbers, each between (1-12)
        console.log(randomCrystalnumber); 
    

        var crystal = $("<div>");
        crystal.attr({
            "class": "crystal",
            "data": randomCrystalnumber,
            "image": "src",
        })             
        $(".crystals").append(crystal);
        crystal.css({"background-image":"url('" + image[i] + "')",
        "background-size":"cover"

        });
    }}                                  //end of "startGameReset" function.

    startGameReset();        
    
                                                                                //$(".crystal").on("click", function() { -- had to change this to the following to work as the "startGameReset" broke it.
            $(document).on("click", ".crystal", function() {

                                                // Clicking the button triggers an alert message (deleted it).
        console.log($(this).attr("data"));                    // each crystal button logs a click
       // console.log(typeof num);                   // to show whether its a number or string
        var num = parseInt($(this).attr('data'));   //to make it a number
        //var result = num + 5;                   //testing
        //console.log(result);                       //testing
        
            counter += num;
            $(".score2").html("Your Crystal totals are: " + counter);

            if (counter > randomNumber){
                console.log("You lost!!");
                losses++;
                $(".losses").html("Losses: " + losses);

                counter = 0;
                $(".score2").html("Your Crystal totals are: " + counter);           //this resets to 0 after every game.
                
               
                startGameReset();
            }

            else if (counter === randomNumber){
                console.log("You Win!!!");
                wins++;
                
                $(".wins").html("Wins: " + wins);

                counter = 0;
                $(".score2").html("Your Crystal totals are: " + counter);

                startGameReset();
            }

        //     if ((wins > 4) || (losses > 4)) {                  //wins or losses? I tried to add this (if /elseif), but couldnt get the last part to work...

        //         prompt ("You have played 5 games, play on?")
            
        //         counter = 0;
        //         wins = 0;
        //         losses = 0;
        //         totalScore = 0;
        //         $(".score2").html("Your Crystal totals are: " + counter);

        //         startGameReset();

        //     } else {alert("Thanks for playing, goodbye.")
                
        // }
            
            //else {
                //alert ("Good Bye!")
                //break;
            //}
            

      });

    

 });