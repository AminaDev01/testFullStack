const db = require("../models");
const Role = db.roles;
//add role
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a Tutorial
  const role = new Cour({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  // Save Tutorial in the database
  role
    .save(role)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating th.",
      });
    });
};
//afficher liste des admis
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }
    : {};
  Role.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "data not founded." });
    });
};
//find only role
exports.findOne = (req, res) => {
  const id = req.params.id;
  Role.findById(id)
    .then((data) => {
      if (!data) res.status(400).send({ message: "role trouvé" });
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "role non trouveé avec id=" + id,
      });
    });
};

// update role by id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "data can not be empty",
    });
  }
  const id = req.params.id;
  Role.findByIdAndUpdate(id, req.body, { roleFindAndUpdate: false })
    .then((data) => {
      if (!data) {
        res.status(400).send({
          message: `can't update role with Id =${id}`,
        });
      } else
        res.send({
          message: "role is updated",
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: "error updating role with id=" + id,
      });
    });
};
