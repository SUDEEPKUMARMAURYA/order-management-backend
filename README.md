# Order Management Backend

## 📌 Project Overview

This backend application manages customer orders, automatically updates order statuses using a scheduler, stores status history, and maintains scheduler execution logs.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Node Cron
- UUID

---

## ✨ Features

- Create Order
- Get Orders
- Filter Orders by Status
- Search Orders
- Pagination
- Automatic Scheduler
- Scheduler Logs
- Status History
- Secret Key Authentication
- Database Indexing
- Input Validation

---

## 📂 Folder Structure

```
src/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── scheduler/
└── utils/
```

---

## ⚙️ Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
SECRET_KEY=your_secret_key
```

---

## ▶️ Run Project

Install dependencies

```bash
npm install
```

Run the server

```bash
npm run dev
```

---

## 📮 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/orders` | Create a new order |
| GET | `/api/orders` | Get all orders |
| POST | `/api/scheduler/run` | Execute scheduler |
| GET | `/api/scheduler-logs` | Get scheduler logs |

---

## 🗄 Database Collections

- Orders
- StatusHistory
- SchedulerLogs

---

## ⏰ Scheduler Flow

- PLACED → PROCESSING (after 10 minutes)
- PROCESSING → READY_TO_SHIP (after 20 minutes)

---

## 🔒 Security

Scheduler API is protected using the `x-secret-key` request header.

---

## 👨‍💻 Author

**Sudeep Kumar Maurya**