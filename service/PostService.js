import Post from "../model/Post.js";

class PostService {

async create(post) {
     return await Post.create(post);
  }

  async getAll() {
      return await Post.find();
  }

  async getPostById(id) {
      if (!id) {
        throw new Error('id is not defined')
      }
      return await Post.findById(id);
  }

  async updatePost(post) {
      if (!post._id) {
        throw new Error('id is not defined')
      }
      const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true});
      return updatedPost;
  }

  async deletePost(id) {
        if (!id) {
          throw new Error('id is not defined')
        }
        return await Post.findByIdAndDelete(id);
  }
}

export default new PostService();