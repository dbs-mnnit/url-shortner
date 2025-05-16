const mongoose = require("mongoose");

const ShortURLSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortCode: {
    type: String,
    required: true,
    unique: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false, // null for anonymous users
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expiresAt: {
    type: Date,
    default: null, // Optional expiration
  },
  clickCount: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  metadata: {
    ip: String,
    userAgent: String,
  },
});

module.exports = mongoose.model("ShortURL", ShortURLSchema);
