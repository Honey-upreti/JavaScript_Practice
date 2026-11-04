
function createuser(name,age){
    const user = {
     name,
     age,
     getYear(){
         return new Date().getFullYear() - user.age
        }
    }
    return user
}

const user1 = createuser('harsh',20)
const user2 = createuser('aman', 21)