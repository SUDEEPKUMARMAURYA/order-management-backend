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
      status: req.body.status,
      paymentStatus: req.body.paymentStatus,
    });

    return res.status(201).json({
      success: true,
      message: "Order created successfully.",
      order,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Unable to create order.",
    });
  }
};

const getOrders = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const filter = {};

    if (req.query.status) {
      filter.status = req.query.status;
    }

    if (req.query.search) {
      filter.$or = [
        {
          customerName: {
            $regex: req.query.search,
            $options: "i",
          },
        },
        {
          orderId: {
            $regex: req.query.search,
            $options: "i",
          },
        },
      ];
    }

    const totalOrders = await Order.countDocuments(filter);

    const orders = await Order.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return res.status(200).json({
      success: true,
      message: "Orders fetched successfully.",
      page,
      limit,
      totalOrders,
      totalPages: Math.ceil(totalOrders / limit),
      orders,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Unable to fetch orders.",
    });
  }
};
module.exports = {
  createOrder,
  getOrders,
};
