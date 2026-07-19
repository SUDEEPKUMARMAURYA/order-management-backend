const mongoose = require("mongoose");

const schedulerLogSchema = new mongoose.Schema(
  {
    executedAt: {
      type: Date,
      default: Date.now,
    },

    totalOrders: Number,

    updatedOrders: Number,

    status: String,

    message: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SchedulerLog", schedulerLogSchema);