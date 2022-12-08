require("dotenv").config();
const User = require("../models/user");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

class AuthController {
  /**
   * @route POST api/v1/auth/register
   * @desc Register user
   * @access Public
   */
  async register(req, res) {
    const { username, email, password } = req.body;
    // Simple validation
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Missing username and/or password",
      });
    }
    try {
      // check for existing user
      const user = await User.findOne({ username });

      //username taken
      if (user) {
        return res
          .status(400)
          .json({ success: false, message: "Username already taken" });
      }

      //All good -> hash password

      const hasPassword = await argon2.hash(password);

      const newUser = new User({
        username,
        email,
        password: hasPassword,
      });

      await newUser.save();

      const accessToken = jwt.sign(
        { id: newUser._id },
        process.env.ACCESS_TOKEN
      );

      // Successfully
      res.status(200).json({
        success: true,
        message: "The user has been created successfully!!",
        accessToken,
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
   * @route POST api/v1/auth/login
   * @desc LOGIN user
   * @access Public
   */

  async login(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Missing email and/or password",
      });
    }
    try {
      // Check for existing user
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "Incorrect email or password",
        });
      }
      //verify password
      const validPassword = await argon2.verify(user.password, password);
      if (!validPassword) {
        return res.status(400).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      //access token
      const accessToken = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.ACCESS_TOKEN
      );

      res.status(200).json({
        success: true,
        message: "User logged in successfully",
        accessToken,
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
   * @route POST api/v1/auth/login
   * @desc CHECK if user is logged in
   * @access Public
   */

  async logged(req, res) {
    try {
      const user = await User.findById(req.id).select("-password");
      if (!user)
        return res
          .status(400)
          .json({ success: false, message: "User not found" });
      res.json({ success: true, user });
    } catch (err) {
      console.log(err);
      res.status(404).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
}

module.exports = new AuthController();
