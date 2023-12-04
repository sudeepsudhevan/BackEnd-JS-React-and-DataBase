//jshint esversion:6
import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
// import mongoose from "mongoose";

const app = express();

app.use(express.static("public"));
// app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    res.render("home.ejs")
})

app.get("/login", function (req, res) {
    res.render("login.ejs")
})

app.get("/register", function (req, res) {
    res.render("register.ejs")
})


app.listen(3000, function () {
    console.log("Server started on port 3000.");
});