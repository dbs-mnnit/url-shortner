const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true, // Hashed
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  plan: {
    type: String,
    enum: ["free", "pro", "enterprise"],
    default: "free",
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  }
});

module.exports = mongoose.model("User", UserSchema);
