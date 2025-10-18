# 📝 Notes App Backend

This is a simple RESTful API built with Node.js and Express that allows you to create, read, update, and delete notes. It uses in-memory storage, making it ideal for learning backend fundamentals and testing CRUD operations with Postman.

## Getting Started

To run this project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/notes-app.git
   cd notes-app

   ```

2. Install dependencies:

   ```bash
   npm install

   ```

3. Start the server:
   ```bash
   node server.js
   ```

The server will run at http://localhost:3000

## API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/notes`     | Get all notes     |
| GET    | `/api/notes/:id` | Get a note by ID  |
| POST   | `/api/notes`     | Create a new note |
| PUT    | `/api/notes/:id` | Update a note     |
| DELETE | `/api/notes/:id` | Delete a note     |

## Tech Stack

| Technology | Description                    |
| ---------- | ------------------------------ |
| Node.js    | JavaScript runtime environment |
| Express.js | Web framework for Node.js      |
| Postman    | API testing and debugging tool |

## Future Improvements

- Add persistent storage using MongoDB or PostgreSQL
- Implement user authentication and authorization
- Add input validation with express-validator
- Document API with Swagger/OpenAPI
- Deploy to Render, Vercel, or Railway

## Author

Built by **Enes** — a solo backend build, fully tested and documented as part of a 13-week DevOps roadmap.  
Focused on clean architecture, tactical debugging, and recruiter-ready execution.
