function makehttprequest(method,url) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.addEventListener("load", () => {
    console.log(xhr.response);
  });

  xhr.open(method, url);
  xhr.send();
}

makehttprequest("GET",'https://dummyjson.com/users')
makehttprequest("GET",'https://dummyjson.com/users/1')