const username = prompt('Please Enter Your Name.')
const userAge = parseInt(prompt('Please Enter Your Age.'));

debugger

if (userAge >= 0 && userAge <= 4) {
    console.log(`${username} is a kid.`);
    console.log('And he/she is playing.');
} else if (userAge >= 5 && userAge <= 17) {
    console.log(`${username} is a school student.`);
    console.log('And he/she is learning science and maths.');
} else if (userAge >= 18 && userAge <= 24) 
// nesting is done in this statement 
{
    console.log(`${username} is a college student.`);
    console.log('And he/she is learning computer science.');
    if (userAge>=20) {
        console.log('he is above 19');
    }   else {
        console.log('he is below 20');
    }   if (username.length > 5) {
            console.log("username is greater than 5");
        }
      else {
            console.log('username is smaller than 6');
        }
    
} else if (userAge >= 25 && userAge <= 45) {
    console.log(`${username} is a working professional.`);
    console.log('And he/she is a web developer.');
} else if (userAge > 45 && userAge < 121) {
    console.log(`${username} is retired.`);
    console.log('And he/she reads newspaper.');
} else if (userAge >= 121) {
    console.log(`${username} is immortal.`);
    console.log('And he/she reads newspaper.');
} else {
    console.log('Please Enter a Valid Age');
}

console.log('Program Ended!!')
