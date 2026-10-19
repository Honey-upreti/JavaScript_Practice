const resolvebtn = document.querySelector("#resolver");
const rejectbtn = document.querySelector("#rejecter");

const p = new Promise((resolve, reject) => {
  resolvebtn.addEventListener("click", () => {
    resolve("Promise resolved");
    console.log(p);
  });
  rejectbtn.addEventListener("click", () => {
    reject("Promise rejected");
    console.log(p);
  });
});

p.then((data) => {
  console.log(data);
}).catch((error)=>{
    console.log(error);
})
