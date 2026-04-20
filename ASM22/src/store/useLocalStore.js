export const useStore = {
  getPosts() {
    return JSON.parse(localStorage.getItem("posts") || "[]");
  },

  savePosts(posts) {
    localStorage.setItem("posts", JSON.stringify(posts));
  },

  addPost(post) {
    let posts = this.getPosts();
    posts.push(post);
    this.savePosts(posts);
  },

  deletePost(index) {
    let posts = this.getPosts();
    posts.splice(index, 1);
    this.savePosts(posts);
  },

  updatePost(index, post) {
    let posts = this.getPosts();
    posts[index] = post;
    this.savePosts(posts);
  }
};