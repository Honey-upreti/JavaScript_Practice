# JavaScript Constructor Functions & Prototypes

This example demonstrates how a constructor function creates objects and
how those objects share methods through the constructor's `prototype`.

## 1. The code

``` javascript
function Createuser(name, age) {
  this.name = name;
  this.age = age;
}

Createuser.prototype.getYear = function () {
  return new Date().getFullYear() - this.age;
};

const user1 = new Createuser("harsh", 20);
const user2 = new Createuser("aman", 21);

console.log(user1.getYear());
console.log(user2.getYear());
```

## 2. How the relationship works

``` mermaid
flowchart TB
    C["Createuser constructor function<br/>function Createuser(name, age) {<br/>  this.name = name;<br/>  this.age = age;<br/>}"]
    P["Createuser.prototype<br/>constructor: Createuser<br/>getYear: function () { ... }"]
    U1["user1<br/>name: 'harsh'<br/>age: 20"]
    U2["user2<br/>name: 'aman'<br/>age: 21"]

    C -->|"has a .prototype property"| P
    U1 -.->|"internal [[Prototype]] link"| P
    U2 -.->|"internal [[Prototype]] link"| P
```

**Important:** `Createuser.prototype` is an object associated with the
constructor function. When you call the function with `new`, JavaScript
creates a new instance and sets that instance's internal prototype link
(`[[Prototype]]`) to `Createuser.prototype`.

So `user1` and `user2` do not each need their own copy of `getYear`.
They can both find the same method through the prototype chain.

## 3. What `new` does

When JavaScript evaluates:

``` javascript
const user1 = new Createuser("harsh", 20);
```

It effectively performs these steps:

1.  Creates a new empty object.
2.  Links that object's internal `[[Prototype]]` to
    `Createuser.prototype`.
3.  Calls `Createuser` with `this` set to the new object.
4.  Adds `name` and `age` to that object.
5.  Returns the new object (unless the constructor explicitly returns
    another object).

Conceptually, the result is similar to:

``` javascript
user1 = {
  name: "harsh",
  age: 20
};

// Its internal [[Prototype]] points to Createuser.prototype.
```

## 4. How `user1.getYear()` is found

When this runs:

``` javascript
user1.getYear();
```

JavaScript:

1.  Looks for `getYear` directly on `user1`.
2.  It does not find it there.
3.  Follows `user1`'s internal `[[Prototype]]` link to
    `Createuser.prototype`.
4.  Finds `getYear` there and calls it.
5.  Because it was called as `user1.getYear()`, `this` inside the method
    refers to `user1`.

Therefore, `this.age` is `20` for `user1` and `21` for `user2`.

## 5. Why this is useful

-   **Shared method:** Both instances use the same `getYear` function.
-   **Instance-specific data:** Each object has its own `name` and
    `age`.
-   **Memory efficiency:** The method is not recreated every time the
    constructor runs.
-   **Prototype chain:** JavaScript can look up properties on an
    object's prototype when they are not found on the object itself.

## 6. Verify the shared method

``` javascript
console.log(user1.getYear === user2.getYear); // true

console.log(user1.hasOwnProperty("age"));     // true
console.log(user1.hasOwnProperty("getYear")); // false
console.log(Createuser.prototype.hasOwnProperty("getYear")); // true
```

The `getYear` method is shared through the prototype; `age` is an own
property of each user object.

You can also inspect the prototype:

``` javascript
console.log(Object.getPrototypeOf(user1) === Createuser.prototype); // true
console.log(Object.getPrototypeOf(user2) === Createuser.prototype); // true
```

## Key takeaway

`new` does not make an object access the prototype by magic after the
fact. It creates an instance and connects its internal `[[Prototype]]`
to the constructor's `prototype` object. That connection is why `user1`
and `user2` can both access `Createuser.prototype.getYear()`.
