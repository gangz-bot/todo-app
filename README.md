🚀 To-Do List Application
A simple and interactive To-Do List application built with React (frontend) and Node.js/Express (backend) with complete CRUD functionality. The app allows you to add, delete, update, and filter tasks easily. The project also includes comprehensive testing with Jest, React Testing Library, and Cypress for end-to-end tests.

📂 Project Structure


todo-app/
├── backend/
│   ├── server.js
│   └── data.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TodoApp.js
│   │   │   └── TodoItem.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── App.test.js
│   └── package.json
├── cypress/
│   └── e2e/
│       └── todo.cy.js
├── README.md
└── package.json


🌟 Features
Add a New Task: Quickly add a new to-do item by typing and pressing Enter.
Toggle Task Completion: Click on a task to mark it as completed/uncompleted.
Delete a Task: Remove tasks you no longer need.
Filter Tasks: View all, completed, or active tasks easily.


🛠️ Installation & Setup
Clone the repository:

bash
Copy code
git clone https://github.com/gangz-bot/todo-app.git
cd todo-app



Install frontend dependencies:
Copy code
cd frontend
npm install



Install backend dependencies:
Copy code
cd ../backend
npm install



Run the backend server:
Copy code
node server.js



Run the frontend development server:
Copy code
cd ../frontend
npm start
Open http://localhost:3000 in your browser to see the app in action.

🧪 Testing
This project includes unit tests, integration tests, and end-to-end tests.

Unit & Integration Tests (Jest and React Testing Library):
Copy code
cd frontend
npm test



End-to-End Tests (Cypress):
Copy code
cd frontend
npx cypress open


📚 API Endpoints
Method	Endpoint	Description
GET	/todos	Fetch all tasks
POST	/todos	Add a new task
DELETE	/todos/
Delete a task


🔍 Testing Approach
Unit Tests: Focused on component rendering and state updates.
Edge Case Handling: Empty input validation when adding a new task.
Integration Tests: Verified interactions between components.
E2E Tests: Simulated user actions such as adding, deleting, and filtering tasks.
🎯 Bonus
The backend is implemented using Node.js/Express to provide persistent data storage using data.json. This helps in maintaining the state of tasks even after a page refresh.

💬 Contact
Developer: Gangdev Pooniya
GitHub: gangz-bot
Email: gangdev.pooniya@example.com
