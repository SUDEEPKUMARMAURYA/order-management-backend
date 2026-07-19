const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const orderRoutes = require("./routes/order.routes");
const schedulerRoutes = require("./routes/scheduler.routes");
const schedulerLogRoutes = require("./routes/schedulerLog.routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/orders", orderRoutes);
app.use("/api/scheduler", schedulerRoutes);
app.use("/api/scheduler-logs", schedulerLogRoutes);

app.get("/", (req,res)=>{
  res.json({
    success: true,
    message:"Order management api running"
  });
});



module.exports = app;