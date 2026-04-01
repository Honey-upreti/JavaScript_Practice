// function definition
function IntroduceMe(username, work, age) {
  console.log("Hello!");
  console.log(`My name is ${username || "harsh"}.`);
  console.log(`I am a student ${work || "learning JavaScript"}`);
  console.log(`I am ${age || 30} years old.`);
}

// function call
// const returnvalue = IntroduceMe();
// IntroduceMe("harshit", "developer", 25);
// IntroduceMe("john", "designer", 20);
// IntroduceMe();

// undefined is falsy value hence if we put or in  function then it will take the second value as default value. In above function if we do not pass any value then it will take 'harsh' as default value.
// parameter is in function definition and argument is in function call. In above function username, work and age are parameters and "harshit", "developer", 25 are arguments. We can also call the function without passing any argument then it will take default value as mentioned in function definition.