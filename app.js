var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get("/delete", (req, res) => {
  res.send("Delete User");
});

app.get("/update", (req, res) => {
  res.send("Update User");
});

app.get("/insert", (req, res) => {
  res.send("Insert User");
});

//Launch listening server on port 8080
app.listen(5000, function () {
  console.log('app listening on port 5000!')
})