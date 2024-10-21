

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

// create - add author
const createAuthor = async (name, age) => {
    const authorData = {
        name,
        age
    }

    const author = await Author.create(authorData)
    console.log('New author: ', author);
};

// get - retrieve all authors
const findAuthors = async () => {
    const authors = await Author.find({})

    console.log(authors);
};

// create - add book
const createBook = async (title, published) => {
    const bookData = {
        title,
        published
    }

    const book = await Book.create(bookData)
    console.log('New book: ', book);
}

// get - retrieve all books
const findBooks = async () => {
    const books = await Book.find({}).populate('writer');

    console.log(books);
};

// create embedded information
const createBookDetails = async () => {
    const bookId = '67163886af657c3f59899b6c';
    const book = await Book.findById(bookId);

    const detailsData = {
        genre: 'Fashion',
        description: 'Classy Book',
        wordCount: 100,
    }

    const bookDetails = book.details.push(detailsData);

    await book.save();
    console.log('Modified book: ', book);
};

// show - find book details
const findBookDetails = async () => {
    const bookId = '67163886af657c3f59899b6c'
    const bookDetailsId = '67163c113519178f750aa7f6'

    const book = await Book.findById(bookId);
    const bookDetails = book.details.id(bookDetailsId);

    console.log('Sub document:', bookDetails);
};

// update - edit embedded
const updateBookDetails = async () => {
    const bookId = '67163886af657c3f59899b6c'
    const bookDetailsId = '67163c113519178f750aa7f6'

    const book = await Book.findById(bookId);
    const bookDetails = book.details.id(bookDetailsId);

    bookDetails.genre = 'Gentlemanly';

    await book.save();

    console.log('Updated book: ', book);
}

// delete - remove embedded
const removeBookDetails = async () => {
    const bookId = '67163886af657c3f59899b6c'
    const bookDetailsId = '67163c113519178f750aa7f6'

    const book = await Book.findById(bookId);
    book.details.pull(bookDetailsId);

    await book.save();

    console.log('Updated document: ', book);
};

// find parent from embedded
const findParentAndRemoveEmbedded = async () => {
    try {
        const book = await Book.findOne({
            'details.description': 'Classy Book',
        });

        if (!book) {
            throw new ReferenceError("Todo not found");
        }

        const bookDetails = book.details.find((details) => {
            return details.description = 'Classy Book';
        });

        bookDetails.deleteOne();

        await book.save();
        console.log('updated book: ', book);


    } catch (error) {
        console.log('\n', error, '\n');
    }
};

const assignAuthor = async () => {
    const bookId = '67163886af657c3f59899b6c';
    const authorId = '671632b3075b86f8335380d2';

    const updatedBook = await Book.findByIdAndUpdate(
        bookId,
        { writer: authorId },
        { new: true },
    );

    console.log('Updated document', updatedBook);
};


/*------------------------------- Run Queries -------------------------------*/

// Mister author id:    671632b3075b86f8335380d2
// book id:             67163886af657c3f59899b6c
// book details id:     67163c113519178f750aa7f6

const runQueries = async () => {
    console.log('Queries running');
    const date = new Date();
    // await createAuthor('Mister', 36);
    // await findAuthors();
    // await createBook('The Wonderful Mister Gentleman', date);
    // await findBooks();
    // await createBookDetails();
    // await findBookDetails();
    // await updateBookDetails();
    // await removeBookDetails();
    // await findParentAndRemoveEmbedded();
    // await assignAuthor();
};