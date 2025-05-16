const URLVisitSchema = new mongoose.Schema({
  shortUrlId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ShortURL",
    required: true,
  },
  visitedAt: {
    type: Date,
    default: Date.now,
  },
  ip: String,
  userAgent: String,
  country: String, // Use geo-IP service
  referrer: String,
});

module.exports = mongoose.model("URLVisit", URLVisitSchema);
