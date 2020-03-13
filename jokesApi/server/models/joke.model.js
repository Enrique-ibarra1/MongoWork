const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup required"]
    },
    punchline: {
        type:String,
        required: [true, "punchline is required"],
        minlength: [2, "Not funny"]
    }
}, {timestamps:true})

const Joke = mongoose.model("Joke", JokeSchema);
module.exports = Joke;