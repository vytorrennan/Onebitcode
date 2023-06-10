class Comment {
    constructor (author, content) {
        this.author = author;
        this.content = content;
    }

    displayComment() {
        console.log(this.content);
    }
}

module.exports = Comment;
