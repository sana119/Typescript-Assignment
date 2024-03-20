"use strict";
// exercise 42
let magician = ['Harry potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function make_great(magicianArry) {
    for (let i = 0; i < magicianArry.length; i++) {
        magician[i] = 'the Great ' + magicianArry[i];
    }
}
function show_magicions(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magicions(magician);
