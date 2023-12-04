//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

var is_authorised = false;

function passwordCheck(req, res, next) {
    if (req.body["password"] === "sudeep") {
        is_authorised = true;
    }
    next();

}

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// password check middleware
app.use(passwordCheck);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});


app.post("/check", (req, res) => {
    if (is_authorised) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
    }

})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
