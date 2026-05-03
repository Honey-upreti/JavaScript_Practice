// Higher order function is 'a'
function a (b){
    // console.log(typeof b)
    console.dir(b)
    b()
}
// a('hi');
// a({username: 'harsh', userAge: 18});
// a([1,2,3,4]) 


// callback function
a(function (){
    console.log("hiiiiiiiiiiii");
})
// the function inside a function is anonymous as name is not provided and is known as Callback function
// It is so because we are passing this function in a and a function will later call back it
// hence while calling a function we pass another function So the function that is passed is callback