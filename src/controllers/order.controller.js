const Order = require("../models/order.model");
const { v4: uuidv4 } = require("uuid");

const createOrder = async (req, res) => {
  try {
    const order = await Order.create({
      orderId: uuidv4(),

      customerName: req.body.customerName,

      phoneNumber: req.body.phoneNumber,

      productName: req.body.productName,

      amount: req.body.amount,

      paymentStatus: req.body.paymentStatus,
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getOrders = async (req, res) => {
  try {
    const filter = {};

    if (req.query.status) {
      filter.status = req.query.status;
    }

    const orders = await Order.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      total: orders.length,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  createOrder,
  getOrders,
};