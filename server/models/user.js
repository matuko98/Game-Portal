// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   firstName: {
//     type: String,
//     required: true,
//   },
//   lastName: {
//     type: String,
//     required: true,
//   },

//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   refreshToken: {
//     type: String,
//   },
//   resetToken: {
//     type: String,
//   },
//   resetTokenExpiresAt: {
//     type: Date,
//   },
//   createdOn: {
//     type: Date,
//     default: new Date().getTime(),
//   },
// });

// module.exports = mongoose.model("User", userSchema);

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true, // Corrected
  },
  lastName: {
    type: String,
    required: true, // Corrected
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true, // Added index
  },
  password: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
  },
  resetToken: {
    type: String,
  },
  resetTokenExpiresAt: {
    type: Date,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
