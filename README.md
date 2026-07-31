# MERN Bookstore

A full-stack book catalog app built with MongoDB, Express, React, and Node.js. Create, view, edit, and delete books through a React/Vite frontend backed by an Express + Mongoose API.

## Tech stack

**Backend**
- Node.js / Express
- Mongoose (MongoDB Atlas)
- CORS, dotenv

**Frontend**
- React + Vite
- Tailwind CSS, Material UI
- React Router, Axios, Notistack

## Project structure

```
.
├── config.js              # Reads PORT / MONGODB_URL from environment
├── index.js                # Express app entry point
├── models/
│   └── bookModel.js        # Mongoose schema (title, author, publishYear)
├── routes/
│   └── booksRoute.js       # CRUD routes for /api/books
└── client/                 # React frontend (Vite)
    └── src/
        ├── pages/           # Home, CreateBooks, ShowBook, EditBook, DeleteBook
        ├── components/      # Spinner, BackButton, etc.
        └── utils/api.js     # Axios wrapper with backend wake-up/retry logic
```

## Getting started

### Prerequisites
- Node.js
- A MongoDB Atlas cluster (or local MongoDB instance)

### Setup

1. Clone the repo and install backend dependencies:
   ```bash
   npm install
   ```
2. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```
3. Copy `.env.example` to `.env` in the project root and fill in your own values:
   ```bash
   PORT=4000
   MONGODB_URL=mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority&appName=bookstore
   ```

### Running locally

Start the backend:
```bash
npm run server
```

Start the frontend (in a separate terminal, from `client/`):
```bash
npm run dev
```

The Vite dev server proxies `/api` requests to `http://localhost:4000`.

## Deployment

The backend and frontend are deployed as separate services (e.g. a Node web service and a static site on Render). Set `PORT` and `MONGODB_URL` as environment variables on the backend service — never commit `.env` to version control.

## Credit

This project is based on the [MERN Stack Tutorial - Book Store Project](https://www.youtube.com/watch?v=-42K44A1oMA) by Momo Taheri (freeCodeCamp). The deployment/backend-wake-up handling and environment variable setup were adapted for this deployment.
