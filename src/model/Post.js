export default class Post {
  constructor(postName, postAuthor, postContent) {
    this.postName = postName;
    this.postAuthor = postAuthor;
    this.postContent = postContent;
    this.postTime = new Date();
  }
}
