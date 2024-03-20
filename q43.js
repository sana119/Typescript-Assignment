"use strict";
//exrecise 43
let magician = ['Harry potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianArry) {
    for (let i = 0; i < magicianArry.length; i++) {
        magicianArry[i] = 'the Great ' + magicianArry[i];
    }
}
function show_magicions(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagicianArray = copyArray(magician);
make_great(copyMagicianArray);
console.log('\n\nThis is my orignal array:');
show_magicions(magician);
console.log('\n\nThis is my modfied copy of the  array:');
show_magicions(copyMagicianArray);
