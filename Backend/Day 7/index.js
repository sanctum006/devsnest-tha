const express = require("express");
const app = express();

app.get("/json", (req, res) => {
  res.json({ a: 1 });
});
app.get("/statuscode", (req, res) => {
  res.status(200); //just returns the status code
  res.send("OP!!");
});

//the above function can be written like this.

app.get("/statusi", (req, res) => {
  //statusi can be written as abcd or anything right, ref neeche
  res.sendStatus(500).json({ a: 1 });
});

//This is query params, written as localhost:5000/query?k=key&v=value
app.get("/query", (req, res) => {
  // res.send(req.query);
  //to get only one key
  res.send(req.query.k);
});

//dynamic queries
app.get("/users/:userID/book/:bookID", (req, res) => {
  res.send(req.params);
  // res.send(req.params.id);
});

app.listen(5000, () => {
  console.log("Server is listening at port 5000");
});
