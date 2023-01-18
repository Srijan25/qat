require("./mydb");
const cors = require("cors");
const userController = require("./controller/user.controller");
const articleController = require("./controller/article.controller");

const express = require("express");
const app = express();
app.use(cors());
const http = require("http");
const server = http.createServer(app);
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
server.listen(5000, (req, res) => {
  console.log("connection has started");
});

app.get("/user", userController.getUser);
app.post("/register", userController.register);
app.post("/login", userController.login);
app.get("/getarticle",articleController.getArticle);
app.post("/addarticle",articleController.addarticle);

