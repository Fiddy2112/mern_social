require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access token not found",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);

    req.id = decoded.id;
    next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

const verifyTokenAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.body.isAdmin) {
      next();
    } else {
      return res.status(400).json({
        success: false,
        message: "You are not allowed to do that !",
      });
    }
  });
};

module.exports = { verifyToken, verifyTokenAdmin };
