
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
        bookmarks: dbExamples
      });
    });
  });

  app.get("/Bookmarks/cms", function(req, res) {
    db.BookMark.findAll({}).then(function(dbExamples) {
      res.render("cms", {
        examples: dbExamples
      });
    });   
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });  
};
