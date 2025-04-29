# Project: Task API (RESTful API)

### Overview

This is a simple **RESTful API** built with **Node.js** and **Express** to manage a collection of tasks (e.g., to-do items). The API allows you to perform basic **CRUD** (Create, Read, Update, Delete) operations on tasks. The data is stored in memory (no database required).

---

### Features

- **GET /tasks**: Retrieve a list of all tasks.
- **GET /tasks/:id**: Retrieve a specific task by ID.
- **POST /tasks**: Create a new task.
- **PUT /tasks/:id**: Update an existing task by ID.
- **DELETE /tasks/:id**: Delete a task by ID.

---

### Prerequisites

Before you begin, ensure that you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

### Project Structure

```## 📁 Project Structure
task-api/
├── index.js               # Main entry point to start the Express server
├── routes/
│   └── tasks.js           # Defines the routes for the /tasks endpoint
├── controllers/
│   └── taskController.js  # Contains the logic for each route (CRUD operations)
├── models/
│   └── taskModel.js       # Manages task data in memory (CRUD methods)
└── test.js                # Test script to send requests to the API using Axios
```

---

### File Explanation

#### 1. **`index.js`**

- **Purpose**: This file is the main entry point of the application. It initializes the Express application, sets up middleware, and mounts the route handlers.
- **Key Responsibilities**:
  - Starts the Express server on a specified port (default is `3000`).
  - Sets up the `/tasks` route to handle task-related requests.
  - Uses the `express.json()` middleware to parse JSON bodies in HTTP requests.

#### 2. **`routes/tasks.js`**

- **Purpose**: This file defines the routes for handling task-related requests.
- **Key Responsibilities**:
  - Routes are mapped to controller functions, such as:
    - `GET /tasks`: Get all tasks.
    - `POST /tasks`: Create a new task.
    - `GET /tasks/:id`: Get a task by ID.
    - `PUT /tasks/:id`: Update a task by ID.
    - `DELETE /tasks/:id`: Delete a task by ID.
  - This file uses the **Express Router** to group and define the routes.

#### 3. **`controllers/taskController.js`**

- **Purpose**: Contains the logic for each of the API's CRUD operations.
- **Key Responsibilities**:
  - Handles the request and response for each route defined in `tasks.js`.
  - It interacts with the **taskModel** to retrieve or modify task data.
  - For each API endpoint, there is a corresponding function in this file, such as:
    - `getAllTasks()`: Retrieves all tasks.
    - `createTask()`: Creates a new task.
    - `updateTask()`: Updates an existing task.
    - `deleteTask()`: Deletes a task by ID.
  - It ensures proper HTTP status codes are returned (e.g., `200`, `201`, `404`, `400`).

#### 4. **`models/taskModel.js`**

- **Purpose**: This file manages the data for tasks in memory (without a database).
- **Key Responsibilities**:
  - Defines CRUD operations that manipulate a simple in-memory array of tasks.
  - Methods like `getAll()`, `getById()`, `create()`, `update()`, and `delete()` interact with the array to perform various actions.
  - The `nextId` variable is used to assign unique IDs to tasks.

#### 5. **`test.js`**

- **Purpose**: A test script used to send HTTP requests to the API and log the responses for verification.
- **Key Responsibilities**:
  - This script makes requests to the API, such as creating tasks, using the Axios library.
  - It serves as a simple way to test the API functionality without manually using curl or Postman.

---

### How to Run

#### 1. **Clone the repository** (if you haven't already)

```bash
git clone https://github.com/your-username/task-api.git
cd task-api
```

---

### Install Dependencies

Run this command to install required dependencies:

```bash
npm install
```

---

### Start the Express Server

To start the server and keep it running (with automatic restarts):

```bash
npx nodemon index.js
```

You should see:

```bash
Server is running on http://localhost:3000
```

---

### Test the API

You can either use Postman, curl, or the test.js script to interact with the API.

To create a task using test.js, run:

```bash
node test.js
```

#### Alternatively, use curl or Postman:

#### POST a task:

```bash
curl -X POST http://localhost:3000/tasks \
-H "Content-Type: application/json" \
-d '{"title":"Buy eggs","description":"Free-range eggs"}'
```

#### GET all tasks:

```bash
curl http://localhost:3000/tasks
```

---

### API Endpoints

#### 1. GET /tasks: Retrieve a list of all tasks

Example:

```bash
curl http://localhost:3000/tasks
```

Response:

```json
[
  {
    "id": 1,
    "title": "Buy milk",
    "description": "2% milk from store"
  }
]
```

---

#### 2. GET /tasks/:id: Retrieve a task by ID

Example:

```bash
curl http://localhost:3000/tasks/1
```

Response:

```json
{
  "id": 1,
  "title": "Buy milk",
  "description": "2% milk from store"
}
```

---

#### 3. POST /tasks: Create a new task

Example:

```bash
curl -X POST http://localhost:3000/tasks \
-H "Content-Type: application/json" \
-d '{"title":"Buy eggs","description":"Free-range eggs"}'
```

Response:

```json
{
  "id": 2,
  "title": "Buy eggs",
  "description": "Free-range eggs"
}
```

---

#### 4. PUT /tasks/:id: Update an existing task

Example:

```bash
curl -X PUT http://localhost:3000/tasks/2 \
-H "Content-Type: application/json" \
-d '{"title":"Buy eggs","description":"Organic free-range eggs"}'
```

Response:

```json
{
  "id": 2,
  "title": "Buy eggs",
  "description": "Organic free-range eggs"
}
```

---

#### 5. DELETE /tasks/:id: Delete a task by ID

Example:

```bash
curl -X DELETE http://localhost:3000/tasks/2
```

Response:

```json
// No content, status 204
```

---

### Error Handling

- 400 Bad Request: Missing title or description in POST and PUT requests.
- 404 Not Found: Task not found (for GET, PUT, and DELETE operations).

---

That's it! This should be all the information you need to run the API, test it, and modify it as needed.
