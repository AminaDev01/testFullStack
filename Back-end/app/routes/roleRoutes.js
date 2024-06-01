module.exports = (app) => {
  const roles = require("../controllers/roleControllers");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", roles.create);

  // Retrieve all Tutorials
  router.get("/", roles.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", roles.findOne);

  // update student with id
  router.put("/:id", roles.update);

  app.use("/api/roles", router);
};
