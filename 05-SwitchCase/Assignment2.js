// In the output of this program when we input 5 as the age in dialogue box switch case will not run. 
// This is because prompt always returns string type whereas we have enter number type in prompt. 
// As prompt strictly compares the value, hence the it compares '5' to 5 which is not true

const age = prompt(" Enter the age .") 
// Input 5 in the prompt dialogue box.
console.log(`Age is ${age}`);

debugger
switch (age) {
   case 5 :
   console.log('user age is 5');
}
console.log('Program ended');

// 2nd case.
// This program will give output as 'User age is 5".
// This is because we are converting the string type to number type using '+' in prompt.

const age = +prompt(" Enter the age .") 
// Input 5 in the prompt dialogue box.
console.log(`Age is ${age}`);

debugger
switch (age) {
   case 5 :
   console.log('user age is 5');
}
console.log('Program ended');

// 3rd case 
// This program will also give output as 'User age is 5'
// This is because we converted age to number type in switch expression

const age = prompt(" Enter the age .") 
// Input 5 in the prompt dialogue box.
console.log(`Age is ${age}`);

debugger
switch (+age) {
   case 5 :
   console.log('user age is 5');
}
console.log('Program ended');

// We can also use parseInt function to convert the string type to number type.

