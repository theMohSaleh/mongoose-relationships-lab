/**
Objective

Design Mongoose schemas to model different scenarios, focusing on implementing one-to-one, one-to-many, and/or many-to-many relationships.
Instructions

1. Choose one of the following scenarios to model:
    Library System: Model a system with books and authors.
    Social Media Platform: Model a platform with users and posts.
    E-commerce Website: Model a site with customers and orders.
    School Management System: Model a system with students and courses.
2. Design Your Schema
3. For your chosen scenario, design Mongoose schemas to represent the necessary relationships. Ensure that:
    One schema contains an embedded schema (for example, an author embedded in a book or comments embedded in a post).
    You define relationships between schemas (one-to-one, one-to-many, or many-to-many).
4. Write CRUD Query Functions
5. After designing your schemas, write the following CRUD query functions for each model:
    Create: A function to create new entries for your model (e.g., adding a new book or user).
    Read: A function to retrieve specific data based on a query (e.g., fetching all posts by a user or finding all books by a particular author).
    Update: A function to modify existing data (e.g., updating a book's details or editing a post).
    Delete: A function to remove entries from the database (e.g., deleting an order or a course).

At least one of these query functions should interact with the embedded schema within your model
(for example, adding or modifying an embedded comment in a post or adding an embedded item in an order).
 */

/*------------------------------ Starter Code ------------------------------*/
const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
// const Todo = require('./models/todo');

const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    await runQueries();

    mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit();
};

connect();

/*----------------------------- Query Functions -----------------------------*/


/*------------------------------- Run Queries -------------------------------*/

const runQueries = async () => {
    console.log('Queries running');
    // await createTodo();
};