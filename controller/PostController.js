import Post from "../model/Post.js";
import PostService from "../service/PostService.js";

class PostController {

  async create(req, res) {
    if (req.method === "OPTIONS") {
      res.header('Access-Control-Allow-Origin', req.headers.origin);
    } else {
      res.header('Access-Control-Allow-Origin', '*');
    }
    try {
      const post = await PostService.create(req.body);
      res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();
      res.json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getPostById(req, res) {
    try {
      const post = await PostService.getPostById(req.params.id);
      res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async updatePost(req, res) {
    try {
      const updatedPost = await PostService.updatePost(req.body);
      return res.json(updatedPost);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async deletePost(req, res) {
    try {
      const post = await PostService.deletePost(req.params.id);
      return res.json(post);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new PostController();
