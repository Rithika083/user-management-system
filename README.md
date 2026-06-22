# User Management System

## Project Overview

The User Management System is a full-stack web application developed using the MERN stack. It provides secure user registration, authentication, profile management, and role-based access control. The application demonstrates frontend-backend integration, JWT authentication, secure password storage, and REST API development.

---

## Technologies Used

### Frontend
- React.js
- React Router DOM
- Axios
- Bootstrap

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication & Security
- JSON Web Token (JWT)
- bcrypt.js

### Version Control
- Git
- GitHub

---

## Features

### Authentication
- User Registration
- User Login
- JWT-based Authentication
- Secure Password Hashing using bcrypt

### User Management
- View User Profile
- Update User Profile
- Logout Functionality

### Authorization
- Role-Based Access Control
- Admin Protected Routes
- User Protected Routes

### Admin Features
- View All Registered Users
- Access Restricted to Admin Users Only

### Validation & Error Handling
- Required Field Validation
- Duplicate User Validation
- Password Length Validation
- Invalid Login Handling

### User Interface
- Responsive Bootstrap Design
- Login Page
- Register Page
- Profile Page
- Admin Dashboard

---

## Project Structure

```text
user-management-system
│
├── client
│   ├── src
│   │   ├── pages
│   │   ├── services
│   │   ├── components
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server
│   ├── controllers
│   ├── routes
│   ├── middleware
│   ├── models
│   ├── config
│   └── server.js
│
└── README.md
```

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|----------|------------|-------------|
| POST | /register | Register a new user |
| POST | /login | Login user |

### Profile

| Method | Endpoint | Description |
|----------|------------|-------------|
| GET | /profile | Get user profile |
| PUT | /profile | Update user profile |

### Admin

| Method | Endpoint | Description |
|----------|------------|-------------|
| GET | /admin/users | View all users (Admin Only) |

---

## Installation and Setup

### Clone Repository

```bash
git clone https://github.com/Rithika083/user-management-system.git
```

### Backend Setup

```bash
cd server

npm install

npm run dev
```

### Frontend Setup

```bash
cd client

npm install

npm run dev
```

---

## Environment Variables

Create a `.env` file inside the server folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## Security Features

- Passwords are securely hashed using bcrypt.
- JWT tokens are used for authentication.
- Protected routes prevent unauthorized access.
- Role-based authorization restricts admin-only functionality.

---

## Testing Performed

- User Registration
- Duplicate User Validation
- Password Validation
- Login Authentication
- Profile Retrieval
- Profile Update
- Logout Functionality
- Admin Route Protection
- User Route Restriction
- JWT Authentication Verification

---

## Expected Outcome Achieved

✔ User Registration and Login Functionality

✔ JWT-Based Authentication

✔ Role-Based Access Control

✔ User Profile Management

✔ REST API Design

✔ Frontend-Backend Integration

✔ Input Validation and Error Handling

✔ Secure Password Storage

✔ Documentation of System Architecture

---

## Future Enhancements

- User Search Functionality
- Delete User Feature
- Change User Role
- Forgot Password Feature
- Email Verification
- Application Deployment
- Dashboard Analytics

---

## Author

**Rithika S**

Industry-Oriented Full Stack Web Application for User Management System
