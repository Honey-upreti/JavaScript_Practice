const user = {
  name: "harsh",
  lastname: "upreti",
  age: 10,
  address: {
    city: "Pithoragarh",
  },
  getfullname : function(){
    return user.name + ' ' + user.lastname
  }
};

// const a = 'city'
// console.log(user.address && user.address.city);
// console.log(user.address?.city);
// console.log(user.address?.[a]);
console.log(user.getfullname?.());