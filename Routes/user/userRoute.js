const express = require("express");
const login = require("./controllers/login");
const register = require("./controllers/register");

const userRouter = express.Router();
userRouter.post("/login", login);
userRouter.post("/register", register);

module.exports = userRouter;
