

/*------------------------------ Starter Code ------------------------------*/
const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const Book = require('./models/book');
const Author = require('./models/author');

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