var path = require("path");

const movie = require('../controllers/movies.js')

module.exports = (app) => {

    app.get('/show', movie.show)

    app.get("/show/:id", movie.oneMovie)

    app.post('/create', movie.createMovie)

    app.post('/create/:id/comment', movie.createsComment)

    app.delete("/delete/:id", movie.deleteMovie)

    app.delete("/delete/:id/comment/:commentid", movie.deleteComment)

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./project/dist/project/index.html"))
    });
}