const express = require("express");
const userRouter = express.Router();
const userController = require("../controller/user");
const AuthController = require("../services/auth");

userRouter.post("/addUser", userController.createUser);
userRouter.post("/login", AuthController.login);
module.exports = userRouter;
