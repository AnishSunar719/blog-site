//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');

const aboutContent = klajdlkfaldkfjalkjdflkajdflkjadlksfjalkdsjflkadf ashd f9owiehjrrjkljglagahnangang
const contactContent = akjsdlfjaoiweroiwjtoiejr riojheoirueq9tu8yrogjsglm,galg adfjaoij a

let posts = [];

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {posts:posts});
})

app.get('/about', (req, res) => {
  res.render("about", {aboutContent: aboutContent});
})

app.get("/contact", (req, res) => {
  res.render('contact', {contactContent:contactContent});
})

app.get("/compose", (req, res) => {
  res.render('compose');
})

app.post("/compose", (req, res) => {
  let post = {title:req.body.title, content:req.body.newMsg};
  posts.push(post);
  res.redirect("/");
})

app.get("/posts/:topic", (req, res) => {
  posts.forEach((post) => {
    if (_.lowerCase(req.params.topic) === _.lowerCase(post.title)) {
      console.log("Match Found and redirecting");
      res.render("post", {title:post.title, content:post.content});
    }
  })
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
