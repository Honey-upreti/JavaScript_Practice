const firstLink = document.querySelector("body > p:nth-child(5) > a:nth-child(2)")
firstLink.parentElement
// Accessing parent of firstLink, i.e. anchor tag (GUI) 
firstLink.children
// Accessing children of firstlinke, i.e empty htmlcollection
firstLink.nextElementSibling
// Accessing next sibling of anchor tag which is another anchor tag, CSS
firstLink.nextSibling
// This returns next node, like text, comments etc . For eg this will return text-  "of a website, through the use of "
firstLink.previousElementSibling
// Access previous element sibling 
firstLink.previousSibling
// Access previous node