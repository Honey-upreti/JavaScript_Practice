console.log("hi-1")

function hello() {
    console.log("hiiii");
}

for (let i = 1; i <= 2; i++) {
    console.log(i);
}

hello()

setTimeout(hello, 1000)
setTimeout(hello, 2000)
setTimeout(function () {
    console.log("hello")
}, 0)


console.log("hi-2")

// Asynchronous JavaScript is a programming technique that allows your code to start a potentially long-running task—like fetching data from a server or reading a file—and continue responding to other events while that task runs in the background.
// setTimeout is an asynchronous code which moves in web api then in callback queue and at last in call stack