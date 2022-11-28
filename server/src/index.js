require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const db = require("./database/db.js");
const userRouter = require("./routes/users.js");
const authRouter = require("./routes/auth.js");

const app = express();
const port = process.env.PORT || 8080;

//middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));

//routers
app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);

app.listen(port, () => {
  // connected to mongoDb
  db.connect();

  // connected to server
  console.log(`Connected to backend on port ${port}`);
});
