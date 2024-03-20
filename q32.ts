// exercise 32


let current_users: string[] = ['danish','Ali','Dawood','Hassan','Hina'];

let new_users: string[] = ['danish','Ali','Hamzah','Asif','Waseem']

let current_users_lower : string [] =current_users.map(user => user.toLowerCase())

for(let new_user of new_users){

    if(current_users_lower.includes (new_user.toLowerCase())) {

        console.log(`sorry ${new_user}, that name is taken`)
    }else { 
        console.log(`Yes ${new_user}, is still in avilable list`)
    }
}


