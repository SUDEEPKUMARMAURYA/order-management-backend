const express = require("express");

const router = express.Router();

const {
  getSchedulerLogs,
} = require("../controllers/schedulerLog.controller");

router.get("/", getSchedulerLogs);

module.exports = router;