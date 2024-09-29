const express = require("express");
const cors = require("cors");
const createDb = require("./db/db");
const userRouter = require("./router/index");

const app = express();
const port = process.env.PORT || 3550;

app.use(express.json());
app.use(cors());

//routes
app.use("/users", userRouter);

const startServer = async () => {
  // Connect to MongoDB
  await createDb();

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

startServer();
