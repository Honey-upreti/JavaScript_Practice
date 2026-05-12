
function outer () {
    const a = 10
    function parent() {
    const b = 20
    function add() {
    console.log(a+b);
}
  return add
}
return parent()

}

const add1 = outer()

console.dir(add1)

// console.dir(add);

// when we create variables inside a parent function and use it in child function. And we return child function in parent function then with function the variables also returns
// This is called closure of javascript   