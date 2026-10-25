async function makeRequest() {
    const url = "https://httpbin.org/delay/2";
    const response = await fetch(url)
   const data = await response.json()
    // const data = await (await fetch(url)).json()

    console.log(data);
    console.log("hii")
    return data
}
makeRequest().then((data)=>{
  console.log(data);
});

// await is only valid inside async function or when script type is module
