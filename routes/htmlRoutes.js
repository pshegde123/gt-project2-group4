var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.BookMark.findAll({}).then(function(dbExamples) {
      res.render("index", {
        examples: dbExamples
      });
    });
  });
  // Load bookmarks page
  app.get("/Bookmarks", function(req, res) {
    db.BookMark.findAll({}).then(function(dbExamples) {
      res.render("bookmark", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.BookMark.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

    // POST route for saving a new bookmark
  app.post("/api/bookmark", function(req, res) {
      db.Bookmark.create({
        City: req.body.city,
        Address: req.body.address,
        Notes: req.body.notes
      })
        .then(function(result) {
          res.json(result);
        });
    });
  
};
