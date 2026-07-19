require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/db");

const cron = require("node-cron");
const runScheduler = require("./src/scheduler/orderScheduler");

const port = process.env.PORT || 5000;
connectDB();

cron.schedule("*/5 * * * *", async () => {
  console.log("Running Scheduler...");
  await runScheduler();
});

app.listen(port, ()=>{
  console.log(`Server running on port ${port}`);
  
});