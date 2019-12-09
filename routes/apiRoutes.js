var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/read", function(req, res) {
    db.BookMark.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/bookmarks/add", function(req, res) {
    db.BookMark.create({
      City:req.body.city,
      Address:req.body.address,
      Notes:req.body.notes
    }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
