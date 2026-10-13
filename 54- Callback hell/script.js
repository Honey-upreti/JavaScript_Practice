function makehttprequest(method, url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.addEventListener("load", () => {
    callback(xhr.response);
  });

  xhr.open(method, url);
  xhr.send();
}

makehttprequest("GET", "https://dummyjson.com/users", (usersData) => {
  makehttprequest(
    "GET",
    `https://dummyjson.com/posts/user/${usersData.users[0].id}`,
    (postData) => {
      makehttprequest(
        "GET",
        `https://dummyjson.com/comments/post/${postData.posts[0].id}`,
        (commentData) => {
          console.log(commentData.comments[0].user.id);
          makehttprequest(
            "GET",
            `https://dummyjson.com/users/${commentData.comments[0].user.id}`,
            (userdata) => {
              console.log(userdata.firstName);
            },
          );
        },
      );
    },
  );
});

/*This is just made a callback hell, a pyramid like structure where multiple asynchronous operations are deeply nested within one another,
 We can see that I made usersdata call->postData call->commentdata call->userdata call. Which is making my code grow horizontally and makes it difficult to read. I myself having difficulty to read this and understand */
