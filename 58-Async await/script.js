async function makeRequest() {
    const url = "https://httpbin.org/delay/2";
    const response = await fetch(url)
    console.log(response);
    console.log("hii")
}
makeRequest();

function hi() {
  console.log("hi");
  console.log("hello");
}
