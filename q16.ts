// exercise 16
let guest_list :string[] = ['Shagufta','Tariq','azim','sadia'];
let new_Guest :string = 'Fatima' ;

guest_list[0] = new_Guest ;

for(let i=0; i<guest_list.length; i++){
    console.log('Dear . ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party . \n\nThank you!\n\n')
}

let absent_Guest :string = 'Sadia' ;
console.log(`Mrs. ${absent_Guest} is not coming to the party. `) 

console.log('Good News! We find Big Table So we are inviting 3 more guests.')

guest_list.unshift('Hira');
guest_list.splice(2 , 0 , 'safia');
guest_list.push('maryam');


for(let i=0; i<guest_list.length; i++){
    console.log('Dear . ' + guest_list[i] + ',\n\nit is our pleasure to invite you in our party . \n\nThank you!\n\n')
}