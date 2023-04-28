const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const thingsRouter = require("./routes/things");

//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }));

//To parse json data
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({ secret: "Its a secret" }));

//Middleware function to log request protocol
app.use(function (req, res, next) {
    console.log("A request for things received at " + Date.now());
    next();
});

// Route Handlers
app.get("/hello", function (req, res) {
    res.send("Hello there !!!");
});

// Session demo
app.get("/session", function (req, res) {
    if (req.session.page_views) {
        req.session.page_views++;
        res.send("You visited this page " + req.session.page_views + " times");
    } else {
        req.session.page_views = 1;
        res.send("Welcome to this page for the first time!");
    }
});

// How to use router ?
app.use("/things", thingsRouter);

/*
A special method, all, is provided by Express to handle all types of http methods 
at a particular route using the same function. Used for defining middlewares.
*/
app.all("/test", function (req, res) {
    res.send("HTTP method doesn't have any effect on this route!");
});

app.get("/err", function (req, res) {
    const err = new Error("Something went wrong!");
    next(err);
});

//An error handling middleware
app.use(function (err, req, res, next) {
    res.status(500);
    res.send("Oops, something went wrong.");
});

// Other routes here
// app.get("*", function (req, res) {
//   res.send("Sorry, this is an invalid URL.");
// });

const server = app.listen(3000, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log("App listening at http://%s:%s", host, port);
});
