# 📚 Library Management API

A RESTful API built with **Express.js**, **TypeScript**, and **MongoDB (Mongoose)** to manage a library system with features such as book management, borrowing, and reporting.



## 🚀 Features

- 📘 Create, Read, Update, Delete (CRUD) operations for books
- 📚 Borrow books with availability and stock control
- 🔄 Update book availability based on stock
- ✅ Validation for all input fields
- 📊 Aggregated summary of borrowed books using MongoDB aggregation pipeline
- 🧠 Business logic implemented with Mongoose instance/static methods and middleware
- 🔍 Filtering, sorting, and pagination on book list



## 📦 Tech Stack

- **Backend**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Validation**: Mongoose Schema Validation
- **Aggregation**: MongoDB Aggregation Framework



## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/nazneenlipi/library-management-api.git
cd library-management-api

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Start the development server
npm run dev
