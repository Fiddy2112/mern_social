require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");
const db = require("./database/db.js");
const userRouter = require("./routes/users.js");
const authRouter = require("./routes/auth.js");
const postRouter = require("./routes/post.js");

const app = express();
const port = process.env.PORT || 8080;

app.use("/images", express.static(path.join(__dirname, "public/images")));

//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage });
app.post("/api/v1/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "File uploaded successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

//routers
app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/post", postRouter);

app.listen(port, () => {
  // connected to mongoDb
  db.connect();

  // connected to server
  console.log(`Connected to backend on port ${port}`);
});
