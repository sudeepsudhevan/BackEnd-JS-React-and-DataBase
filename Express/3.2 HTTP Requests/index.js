import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // console.log(req.rawHeaders)
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Sudeep</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +91123456789</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
