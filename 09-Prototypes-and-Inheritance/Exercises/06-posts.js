function createPosts() {
  class Post {
    title;
    content;
    constructor(title, content) {
      this.title = title;
      this.content = content;
    }

    toString() {
      return `Post: ${this.title}\nContent: ${this.content}`;
    }
  }

  class SocialMediaPost extends Post {
    constructor(title, content, likes, dislikes) {
      super(title, content);
      this.likes = likes;
      this.dislikes = dislikes;
      this.comments = [];
    }

    addComment(comment) {
      this.comments.push(comment);
    }

    toString() {
      const baseStr = super.toString();
      let totalRating = this.likes - this.dislikes;
      if (this.comments.length === 0) {
        return `${baseStr}\nRating: ${totalRating}`;
      }
      return `Post: ${this.title}\nContent: ${this.content}\nRating: ${totalRating}\nComments:\n${this.comments.map(comment => ` * ${comment}`).join('\n')}`;
    }
  }

  class BlogPost extends Post {
    constructor(title, content, views) {
      super(title, content);
      this.views = views;
    }

    view() {
      this.views++;
      return this;
    }

    toString() {
      const baseStr = super.toString();
      return `${baseStr}\nViews: ${this.views}`
    }
  }
  return {
    Post,
    SocialMediaPost,
    BlogPost
  }
}

const classes = createPosts();
let post = new classes.Post("Post", "Content");
console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
// * Good post
// * Very good post
// * Wow!