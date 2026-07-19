const SchedulerLog = require("../models/schedulerLog.model");

const getSchedulerLogs = async (req, res) => {
  try {
    const logs = await SchedulerLog.find()
      .sort({ createdAt: -1 })
      .limit(20);

    res.status(200).json({
      success: true,
      total: logs.length,
      logs,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = {
  getSchedulerLogs,
};