const mongoose = require('mongoose');

const bookDetailsSchema = mongoose.Schema({
    genre: String,
    description: String,
    wordCount: Number,
})

const bookSchema = mongoose.Schema({
    title: String,
    published: Date,
    details: [bookDetailsSchema],
    writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
    }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;