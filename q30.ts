// exercise 30



const userNames: string[] = ['admin', 'fatima', 'noman' , 'urooj', 'danish',];
for(let i=0; i<userNames.length; i++){

   if(userNames[i] === 'admin'){
      console.log('Hello admin, would you like to see a status report?');
   }
else{
   console.log(`Hello ${userNames[i]}, thank you for logging in again.`)
}
}