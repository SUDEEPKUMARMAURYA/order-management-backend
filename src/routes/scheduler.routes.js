const express = require("express");
const router = express.Router();

const authScheduler = require("../middleware/authScheduler");
const {
  executeScheduler,
} = require("../controllers/scheduler.controller");

router.post("/run", authScheduler, executeScheduler);

module.exports = router;