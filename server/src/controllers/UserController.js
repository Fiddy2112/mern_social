const User = require("../models/user");
const argon2 = require("argon2");

class UserController {
  /**
   * @route PUT api/v1/auth/user/:id
   * @desc UPDATE user
   * @access Private
   */
  async update(req, res) {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
      if (req.body.password) {
        req.body.password = await argon2.hash(req.body.password, {
          hashLength: 10,
        });
        try {
        } catch (err) {
          res.status(500).json(err);
        }
      }
      try {
        await User.findByIdAndUpdate(req.params.id, {
          $set: req.body,
        });
        res.status(200).json({
          success: true,
          message: "Account has been updated",
        });
      } catch (err) {
        console.log(err);
        res.status(404).json({
          success: false,
          message: "Internal server error",
        });
      }
    } else {
      return res.status(403).json("You can update only your account");
    }
  }

  /**
   * @route DELETE api/v1/auth/user/:id
   * @desc DELETE user
   * @access Private
   */
  async delete(req, res) {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
          success: true,
          message: "Account has been deleted",
        });
      } catch (err) {
        console.log(err);
        res.status(404).json({
          success: false,
          message: "Internal server error",
        });
      }
    } else {
      return res.status(403).json("You can delete only your account");
    }
  }

  /**
   * @route POST api/v1/user/:id
   * @desc GET user
   * @access Private
   */
  async get(req, res) {
    try {
      const user = await User.findById(req.params.id);

      const { password, updatedAt, ...others } = user._doc;

      res.status(200).json({
        success: true,
        massage: "Get user successfully",
        others,
      });
    } catch (err) {
      console.log(err);
      res.status(404).json({
        success: false,
        message: "Internal server error",
      });
    }
  }

  /**
   * @route POST api/v1/user/:id/follow
   * @desc GET ALL user
   * @access Private
   */
  //The $push operator appends a specified value to an array. -> them cac doi tuong duoc chi dinh vao mang
  async followUser(req, res) {
    if (req.body.userId !== req.params.id) {
      try {
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.body.userId);
        if (!user.followers.includes(req.body.userId)) {
          await user.updateOne({ $push: { followers: req.body.userId } });
          await currentUser.updateOne({
            $push: { followings: req.params.id },
          });
          res.status(200).json({
            success: true,
            message: "User has been followed",
          });
        } else {
          res.status(403).json("You all ready follow this user");
        }
      } catch (err) {
        console.log(err);
        res.status(500).json({
          success: false,
          message: "Internal server error",
        });
      }
    } else {
      res.status(403).json("You can't follow yourself");
    }
  }

  /**
   * @route POST api/v1/user/:id/unFollow
   * @desc GET ALL user
   * @access Private
   */
  //The $pull operator removes from an existing array all instances
  //of a value or values that match a specified condition.
  //-> Loai bo cac gai tri hoac cac gia tri khop voi dieu kien duoc chi dinh
  async unFollowUser(req, res) {
    if (req.body.userId !== req.params.id) {
      try {
        const user = await User.findById(req.params.id);
        const userCurrent = await User.findById(req.body.userId);
        if (user.followers.includes(req.body.userId)) {
          await user.updateOne({
            $pull: {
              followers: req.body.userId,
            },
          });
          await userCurrent.updateOne({
            $pull: {
              followings: req.params.id,
            },
          });
          res.status(200).json({
            success: true,
            message: "User has been followed",
          });
        } else {
          res.status(403).json("You don't follow this user");
        }
      } catch (err) {
        console.log(err);
        res.status(500).json({
          success: false,
          message: "Internal server error",
        });
      }
    } else {
      res.status(403).json("You can't unfollow yourself");
    }
  }
}

module.exports = new UserController();
