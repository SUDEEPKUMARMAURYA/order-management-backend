# Order Management Backend

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

## Features

- Create Order
- Get Orders
- Filter Orders
- Search Orders
- Pagination
- Scheduler
- Scheduler Logs
- Status History
- Secret Key Authentication

## Run Project

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
SECRET_KEY=your_secret_key
```

## API Endpoints

- POST /api/orders
- GET /api/orders
- POST /api/scheduler/run
- GET /api/scheduler-logs