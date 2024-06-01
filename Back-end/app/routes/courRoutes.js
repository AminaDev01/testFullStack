module.exports = (app) => {
  const cours = require("../controllers/courController");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", cours.create);

  // Retrieve all Tutorials
  router.get("/", cours.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", cours.findOne);

  // update student with id
  router.put("/:id", cours.update);

  app.use("/api/cours", router);
};
