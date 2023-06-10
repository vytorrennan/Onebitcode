const Author = require("./Author");

const john = new Author("John");
john.createPost("My first post!");
john.posts[0].displayPost();
john.posts[0].createComment(john, "My first comment!");
john.posts[0].comments[0].displayComment();
