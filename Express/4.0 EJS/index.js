import express from "express";

const app = express();
const port = 3000;

const today = new Date();
var day_index = today.getDay();

// console.log(day_index);

let advice = "it's time to have work hard";
let day_type = "a weekday";

if (day_index === 0 || day_index === 6) {
    advice = "it's time to have fun";
    day_type = "the weekend";
}

app.get("/", (req, res) => {
    // console.log(advice);
    res.render("index.ejs", { dayType: day_type, advice: advice });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});