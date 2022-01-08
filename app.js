const express = require("express");
const app = express();
const ejs = require("ejs");
const port = 3000;


app.use(express.static('public'));


//Template Engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render('index');
  });
  app.get("/about", (req, res) => {
    res.render('about');
  });
  app.get("/add_post", (req, res) => {
    res.render('add_post');
  });
  app.get("/post", (req, res) => {
    res.render('post');
  });





app.listen(port, () => {
  console.log(`sunucu ${port} port değerinde başlatıldı`);
});
