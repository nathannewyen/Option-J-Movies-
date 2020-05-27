const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose.connect("mongodb://localhost/movieList", {
    useNewUrlParser: true,
});

// Setting
app.use(express.static(__dirname + "/project/dist/project"));

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

require("./server/config/routes.js")(app);

// Localhost
app.listen(8000);