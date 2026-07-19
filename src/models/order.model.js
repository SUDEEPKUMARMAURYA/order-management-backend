const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      unique: true,
      required: true,
    },

    customerName: {
      type: String,
      required: true,
    },

    phoneNumber: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/
},

    productName: {
      type: String,
      required: true,
    },

    amount:{
    type:Number,
    required:true,
    min:1
},

    paymentStatus: {
      type: String,
      enum: ["PENDING", "PAID", "FAILED"],
      default: "PENDING",
    },

    status: {
      type: String,
      enum: ["PLACED", "PROCESSING", "READY_TO_SHIP"],
      default: "PLACED",
    },
  },
  {
    timestamps: true,
  }

);

orderSchema.index({ customerName: 1 });
orderSchema.index({ status: 1 });

module.exports = mongoose.model("Order", orderSchema);