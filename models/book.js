const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: String,
    wordCount: Number,
    published: Date,
    writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;