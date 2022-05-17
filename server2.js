const express = require("express");
const app = express();
var cors = require("cors");
const { tabs, plugins } = require("./data");

app.use(express.json());
app.use(cors());
const hostname = "127.0.0.1";
const port = 2233;

app.use(express.json());

app.get("/plugins", function (req, res) {
  // ...
  res.json(plugins);
});

app.get("/tabs", function (req, res) {
  // ...
  res.json(tabs);
});

app.put("/tabs", function (req, res) {
  // ...
  const { path, tab } = req.body;

  tabs[path] = tab;
  res.json(tab);
});
app.listen(port, hostname, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
