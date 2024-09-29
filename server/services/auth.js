const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user"); // Adjust the path as necessary

module.exports = {
  generateAccessToken: function (user) {
    return jwt.sign(
      {
        email: user.email,
      },
      process.env.JWT_ACCESS_SECRET,
      {
        expiresIn: "10s", // Adjust the expiry time as needed
      }
    );
  },

  generateRefreshToken: function (user) {
    return jwt.sign(
      {
        email: user.email,
      },
      process.env.JWT_REFRESH_SECRET,
      {
        expiresIn: "1d",
      }
    );
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Step 1: Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // Step 2: Check the password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // Step 3: Generate tokens
      const accessToken = this.generateAccessToken(user);
      const refreshToken = this.generateRefreshToken(user);

      // Step 4: Send response with tokens
      res.status(200).json({ accessToken, refreshToken });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};
