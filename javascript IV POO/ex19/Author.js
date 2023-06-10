const Post = require("./Post")

class Author {
    constructor (name) {
        this.name = name;
        this.posts = []
    }

    createPost(postContent) {
        this.posts.push(new Post(this, postContent))
    }
}

module.exports = Author;
