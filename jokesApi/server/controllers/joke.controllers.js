const Joke = require('../models/joke.model'); //import joke model

module.exports = {
    index: (req, res) => {
        Joke.find()
            .then(jokes => res.json(jokes))
            .catch(err => res.status(400).json(err.errors))
    },
    show: (req,res) => {
        Joke.findById(req.params.id)
            .then(joke => res.json(joke))
            .catch(err => res.status(400).json(err.errors))
    }, 
    create: (req, res) => {
        Joke.create(req.body)
            .then(joke => res.json(joke))
            .catch(err => res.status(400).json(err.errors))
    },

    update: (req, res) => {
        Joke.findOneAndUpdate({_id:req.params.id}, req.body),
        {runValidators:true}
            .then(joke => res.json(joke))
            .catch(err => res.status(400).json(err.errors))
    },

    destroy: (req, res) => {
        Joke.deleteOne({_id: req.params.id})
            .then(joke => res.json(joke))
            .catch(err => res.status(400).json(err.errors))
    }
};

