const db = require("../models");
const Cour = db.cours;
//add cour
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a Tutorial
  const cour = new Cour({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  // Save Tutorial in the database
  cour
    .save(cour)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating th.",
      });
    });
};
//afficher liste des cour
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }
    : {};
  Cour.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "data not founded." });
    });
};
//find only cour
exports.findOne = (req, res) => {
  const id = req.params.id;
  Cour.findById(id)
    .then((data) => {
      if (!data) res.status(400).send({ message: "cour trouvé" });
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "cour non trouveé avec id=" + id,
      });
    });
};

// update cour by id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "data can not be empty",
    });
  }
  const id = req.params.id;
  Cour.findByIdAndUpdate(id, req.body, { courFindAndUpdate: false })
    .then((data) => {
      if (!data) {
        res.status(400).send({
          message: `can't update cour with Id =${id}`,
        });
      } else
        res.send({
          message: "cour is updated",
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: "error updating cour with id=" + id,
      });
    });
};
