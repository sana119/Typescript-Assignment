"use strict";
let guest_list = ['Shagufta', 'Tariq', 'azim', 'sadia'];
// let new_Guest :string = 'Fatima' ;
// guest_list[0] = new_Guest ;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear . ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party . \n\nThank you!\n\n')
// }
// let absent_Guest :string = 'Sadia' ;
// console.log(`Mrs. ${absent_Guest} is not coming to the party. `) 
// console.log('Good News! We find Big Table So we are inviting 3 more guests.')
guest_list.unshift('Hira');
guest_list.splice(2, 0, 'safia');
guest_list.push('maryam');
// for(let i=0; i<guest_list.length; i++){
// console.log('Dear . ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party . \n\nThank you!\n\n')
// }
// console.log('\nSorry we can not arrange big table,only Two peolpe well be invited.');
while (guest_list.length > 2) {
    let remove_Guest = guest_list.pop();
    // console.log(`Sorry . ${remove_Guest}, you are not invited  for Dinner.`);
}
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear . ' + guest_list[i] + ',\n\nYou are still invited . \n\nThank you!\n\n')
// }
guest_list.splice(0, 2);
console.log(guest_list);
// exercise 19 
console.log(`Total number of Guset Are: ${guest_list.length}`);
