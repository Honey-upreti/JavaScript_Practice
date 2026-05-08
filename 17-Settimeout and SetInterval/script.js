 // first parameter is code part whereas second is time which tells in how much time our code will execute
// const timer1 = setTimeout(`console.log("Hi-1")`, 1000)
// const timer2 = setTimeout(`console.log("Hi-2")`)
// const timer3 = setTimeout(a, 3000, 'ssjd', 83293, [1,2,3])
// const timer1 = setInterval(`console.log("Hi-1")`, 1000)
// const timer2 = setTimeout(`console.log("Hi-2")`)
const timer3 = setInterval(a, 3000, 'ssjd', 83293, [1,2,3])
// clearTimeout(timer3)

function a(){
    console.log(arguments);
    console.log("hiii");
}

// console.log('dhdsjbaejwbd');

setTimeout(function() {
    // debugger
    console.log("hiii");  //asynchronous code
})

console.log("hi-2"); //synchronous code