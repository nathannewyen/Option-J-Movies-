const mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Customer name is required"],
        minlength: [3, "Customer name must be a minimum of 3 characters"]
    },
    stars: {
        type: Number,
        required: [true, "Star is required"]
    },
    comment: {
        type: String,
        required: [true, "Review is required"],
        minlength: [3, "Review must be a minimum of 3 characters"]
    },
})

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Movie title is required"],
        minlength: [3, "Movie title must be a minimum of 3 characters"]
    },
    reviews: [ReviewSchema]
})

module.exports = {
    Movie: mongoose.model('Movie', MovieSchema),
    Review: mongoose.model('Review', ReviewSchema)
}