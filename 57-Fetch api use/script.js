fetch("https://dummyjson.com/products")
  .then((a) => a.json())
  .then((data) => {
    console.log(data);
  });
