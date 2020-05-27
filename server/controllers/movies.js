const {
    Movie,
    Review
} = require('../models/movies_model.js')


module.exports = {
    show: (req, res) => {
        Movie.find()
            .then(data => {
                res.json({
                    message: "Success!",
                    data
                })
            })
            .catch(err => {
                res.json({
                    message: "Error!",
                    err
                })
            })
    },


    createMovie: (req, res) => {
        Movie.create(req.body, (error, data) => {
            if (error) {
                res.json({
                    message: "Error!",
                    error: error,
                });
            } else {
                res.json({
                    message: "Success!",
                    added: true,
                    data: data
                });
            }
        })
    },

    oneMovie: (req, res) => {
        Movie.find({
                _id: req.params.id,
            })
            .then(product_data => {
                res.json(product_data)
            })
            .catch(err => {
                res.json(err)
            })
    },

    createsComment: (req, res) => {
        Review.create(req.body, (error, comment) => {
            if (error) {
                res.json({
                    ServerMessage: "Error",
                    Error: error
                })
            } else {
                Movie.findOneAndUpdate({
                    _id: req.params.id
                }, {
                    $push: {
                        reviews: comment
                    }
                }, (error, item) => {
                    if (error) {
                        res.json({
                            ServerMessage: "Error",
                            Error: error
                        })
                    } else {
                        res.json({
                            ServerMessage: "Success",
                            Item: item
                        })
                    }
                })
            }
        })
    },

    deleteMovie: (req, res) => {
        Movie.remove({
            _id: req.params.id
        }, err => {
            if (err) {
                res.json({
                    message: "Error!",
                    error: err
                });
            } else {
                res.json({
                    message: "Delete Success!",
                    added: true
                });
            }
        })
    },

    deleteComment: (req, res) => {
        Review.remove({
            _id: req.params.commentid
        }, function (error) {
            if (error) {
                res.json({
                    ServerMessage: "Error",
                    Error: error
                })
            } else {
                Movie.findOneAndUpdate({
                    _id: req.params.id
                }, {
                    $pull: {
                        reviews: {
                            _id: req.params.commentid
                        }
                    }
                }, (error, item) => {
                    if (error) {
                        res.json({
                            ServerMessage: "Error",
                            Error: error
                        })
                    } else {
                        res.json({
                            ServerMessage: "Success",
                            Item: item
                        })
                    }
                })
            }
        })
    }

}