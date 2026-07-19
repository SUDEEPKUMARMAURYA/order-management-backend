const Order = require("../models/order.model");
const StatusHistory = require("../models/statusHistory.model");
const SchedulerLog = require("../models/schedulerLog.model");

const runScheduler = async () => {
  try {
    console.log("Scheduler Started...");

    const now = new Date();

    const orders = await Order.find({
      status: { $in: ["PLACED", "PROCESSING"] },
    });

    let updatedOrders = 0;

    for (const order of orders) {
      const minutes =
        (now.getTime() - order.createdAt.getTime()) / (1000 * 60);

      let newStatus = null;

      // PLACED -> PROCESSING (10 min)
      if (order.status === "PLACED" && minutes >= 10) {
        newStatus = "PROCESSING";
      }

      // PROCESSING -> READY_TO_SHIP (20 min)
      if (order.status === "PROCESSING" && minutes >= 20) {
        newStatus = "READY_TO_SHIP";
      }

      if (newStatus) {
        // Save History
        await StatusHistory.create({
          orderId: order.orderId,
          fromStatus: order.status,
          toStatus: newStatus,
        });

        // Update Order
        order.status = newStatus;
        await order.save();

        updatedOrders++;
      }
    }

    // Save Scheduler Log
    await SchedulerLog.create({
      totalOrders: orders.length,
      updatedOrders,
      status: "SUCCESS",
      message: "Scheduler executed successfully",
    });

    console.log("Scheduler Finished");
  } catch (error) {
    console.log(error);

    await SchedulerLog.create({
      totalOrders: 0,
      updatedOrders: 0,
      status: "FAILED",
      message: error.message,
    });
  }
};

module.exports = runScheduler;