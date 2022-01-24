import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());
const login = [];
const userServer = [];
const tweets = [];

app.listen(5000, () => {
  console.log("Rodando em http://localhost:5000");
});

app.post("/sign-up", (req, res) => {
  const user = req.body;

  login.push(user);
  userServer.push(user);
  res.send("OK");
});

app.post("/tweets", (req, res) => {
  const tweet = req.body;

  tweets.push(tweet);
  res.send("OK");
});
