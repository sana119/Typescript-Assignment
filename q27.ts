// exersice 27
let alien_color: string = "green";
// If the alien is green, print a message that the player earned 5 points.
// If the alien is yellow, print a message that the player earned 10 points.
// If the alien is red, print a message that the player earned 15 points.

// Version 1  of the program
 if (alien_color == 'green') {
    console.log("Version 1: Player just earned 5 points for shooting the alien");
} 

else if (alien_color == "yellow"){
    console.log("Player just earned 10 points. ")
}

 else if(alien_color == "red"){
    console.log("Player just earned 15 points")
 }
 else{
    console.log("Please select the right color")
}

 // Version 2  of the program

 alien_color = "yellow"
 
 if (alien_color == 'green') {
    console.log("Player just earned 5 points for shooting the alien");
} 

else if (alien_color == "yellow"){
    console.log("Version 2: Player just earned 10 points. ")
}

else if(alien_color == "red"){
    console.log("Player just earned 15 points")
 }
 else{
    console.log("Please select the right color")
}



    // Version 3  of the program

 alien_color = "red"
 
 if (alien_color == 'green') {
    console.log("Player just earned 5 points. ");
} 

else if (alien_color == "yellow"){
    console.log("Player just earned 10 points. ")
}
 else if(alien_color == "red"){
    console.log("Version 3: Player just earned 15 points")
 }
 else{
    console.log("Please select the right color")
}

