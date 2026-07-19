const runScheduler = require("../scheduler/orderScheduler");

const executeScheduler = async (req, res) => {
  try {
    await runScheduler();

    res.status(200).json({
      success: true,
      message: "Scheduler executed successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  executeScheduler,
};