const mongoose = require("mongoose");

const statusHistorySchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
    },

    fromStatus: {
      type: String,
      required: true,
    },

    toStatus: {
      type: String,
      required: true,
    },

    changedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("StatusHistory", statusHistorySchema);