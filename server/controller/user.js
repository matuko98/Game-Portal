const User = require("../models/user");
const { hashP } = require("../services/encrypt");
const bcrypt = require("bcrypt");

const UserController = {
  // Function to create a new user
  createUser: async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
      const hashedPassword = await hashP(password);
      const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });
      await newUser.save();
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(400).json({ error: error.message });
    }
  },

  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = UserController;
