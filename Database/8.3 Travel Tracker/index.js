import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "sudeep",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// let countries_codes = [];

// db.query("SELECT country_code FROM visited_countries", (err, res) => {
//   if (err) {
//     console.error("Error executing query", err.stack);
//   } else {
//     countries_codes = res.rows;
//   }
//   db.end();
// });

// app.get("/", async (req, res) => {
//   //Write your code here.
//   let total = countries_codes.length;
//   // console.log(countries_codes);
//   let code = [];
//   for (var i = 0; i < countries_codes.length; i++) {
//     code.push(countries_codes[i].country_code);
//    // console.log(countries_codes[i].country_code);
//   }
//   res.render("index.ejs", { countries: code, total: total });
// });

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  // console.log(result.rows);
  return countries;
}

app.get("/", async (req, res) => {
  const countries = await checkVisisted();
  res.render("index.ejs", { countries: countries, total: countries.length });
});

//INSERT new country

app.post("/add", async (req, res) => {
  const country_added = req.body.country;
  // console.log(country_added);
  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%' ",
      [country_added.toLowerCase()]);
    const data = result.rows;
    // console.log(data);
    const countryCode = data[0].country_code;
    try {
      await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", [countryCode]);
      res.redirect('/')
    } catch (error) {
      console.log(error);
      const countries = await checkVisisted();
      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        error: 'Country has already been added, try again.'
      });
    }
  } catch (error) {
    console.log(error);
    const countries = await checkVisisted();
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: 'Country does not exist,try again.'
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
