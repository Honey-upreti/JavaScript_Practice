document.querySelector('[harshit]').getAttribute('hello')
// here queryselector select an element with harshit attribute , since two element have this attribut, js will go with first element in queryselector, now getAttribute() returns
// the value of provided attribute, for eg here I provided 'hello' attribute so it will return 'world'

document.querySelector('h1').setAttribute('title','hi')
// here I used setattriubte, now this method can create an attribute with it's value, for eg
// here I created title attribute with "hi" value
// This method is used to create a new attribute or it can modify previous value of an attribute
// It will return error if only attribute is provided, we have to provide both attribute and it's value

// Now some attribute which are predefined and common can be modified or accessed without these values such ad ID, className
document.querySelector('h2').id = 'hello'