const Comment = require("./Comment")

class Post {
    constructor (author, content) {
        this.author = author;
        this.content = content;
        this.comments = [];
    }

    createComment(author, commentContent) {
        return this.comments.push(new Comment(author, commentContent));
    }

    displayPost() {
        console.log(this.content);
    }
}

module.exports = Post;
