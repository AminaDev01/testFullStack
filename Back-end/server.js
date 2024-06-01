const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
// connect to data base
const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`database is connected`);
  })
  .catch((err) => {
    console.log(`can't not connect to database`, err);
    process.exit();
  });
var corsOption = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//route test
app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

// appel des routeurs
require("./app/routes/courRoutes")(app);
require("./app/routes/roleRoutes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is working on port ${PORT}`);
});
