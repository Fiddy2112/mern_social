const Post = require("../models/post");

class PostController {
  /**
   * @route POST api/v1/auth/post
   * @desc CREATE post
   * @access Public
   */

  async create(req, res) {
    try {
      const newPost = new Post(req.body);
      const savedPost = await newPost.save();
      res.status(200).json({
        success: true,
        message: "You has been new post completed",
        savedPost,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  /**
   * @route POST api/v1/auth/post
   * @desc UPDATE post
   * @access Public
   */

  async update(req, res) {
    try {
      const post = await Post.findById(req.params.id);
      if (post.userId === req.body.userId) {
        await post.updateOne({
          $set: req.body,
        });
        res.status(200).json({
          success: true,
          message: "Your post has been updated",
        });
      } else {
        res.status(403).json("You can update only your post");
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  /**
   * @route POST api/v1/auth/post
   * @desc DELETE post
   * @access Public
   */

  async delete(req, res) {
    try {
      const post = await Post.findById(req.params.id);
      if (post.userId === req.body.userId) {
        await post.deleteOne();
        res.status(200).json({
          success: true,
          message: "Your post has been deleted",
        });
      } else {
        res.status(403).json("You can delete only your post");
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  /**
   * @route POST api/v1/auth/post
   * @desc LIKED / DISLIKED post
   * @access Public
   */

  async likePost(req, res) {
    try {
      const post = await Post.findById(req.params.id);
      if (!post.likes.includes(req.body.userId)) {
        await post.updateOne({
          $push: {
            likes: req.body.userId,
          },
        });
        res.status(200).json({
          success: true,
          message: "The post has been liked",
        });
      } else {
        await post.updateOne({
          $pull: {
            like: req.body.userId,
          },
        });
        res.status(200).json({
          success: true,
          message: "The post has been disliked",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  /**
   * @route POST api/v1/auth/post
   * @desc GET a post
   * @access Public
   */

  async getPost(req, res) {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json({
        success: true,
        message: "You a get post",
        post,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  /**
   * @route POST api/v1/auth/post
   * @desc GET all post
   * @access Public
   */

  async getAllPost(req, res) {
    try {
      const currentUser = await Post.findById(req.body.userId);
      const userPost = await Post.find({ userId: currentUser._id });
      const friendPosts = await Promise.all(
        currentUser.followings.map((friendId) => {
          return Post.find((userId = friendId));
        })
      );
      res.json(userPost.concat(...friendPosts));
    } catch (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
}

module.exports = new PostController();
