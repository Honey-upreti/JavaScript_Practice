// In this assignment we have changed the else if program into switch case
const username = 'harsh'
const userAge = 20
console.log(`Name: ${username}`);
console.log(`Age: ${userAge}`);

// if (userAge >= 0 && userAge <= 4) {
//     console.log(`${username} is a kid.`);
//     console.log('And he/she is playing.');
// }

// else if (userAge >= 5 && userAge <= 17) {
//     console.log(`${username} is a school student.`);
//     console.log('And he/she is learning science and maths.');
// }

// else if (userAge >= 18 && userAge <= 24) {
//     console.log(`${username} is a college student.`);
//     console.log('And he/she is learning computer science.');
// }

// else if (userAge >= 25 && userAge <= 45) {
//     console.log(`${username} is a working professional.`);
//     console.log('And he/she is a web developer.');
// }

// else if (userAge > 45) {
//     console.log(`${username} is retired.`);
//     console.log('And he/she reads newspaper.');
// }
// else {
//     console.log('please enter a valid age');
// }    
debugger
switch (true) {
    case (userAge >= 0 && userAge <= 4) :
        console.log(`${username} is a kid.`)
        break
     case (userAge >= 5 && userAge <= 17):
        console.log(`${username} is a school student.`)
        break;
     case (userAge >= 18 && userAge <= 24):
        console.log(`${username} is a  college student.`)
        break;
     case (userAge >= 25 && userAge <= 45)  :
        console.log(`${username} is a working professional.`)
        break;
     case (userAge > 45) :
        console.log(`${username} is a retired.`)
        break;
     default :
        console.log(`Please enter a valid age.`)
}
console.log('code ended');
