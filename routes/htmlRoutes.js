
var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.BookMark.findAll({}).then(function(dbExamples) {
      res.render("index", {
        YOUR_API_KEY: process.env.YOUR_API_KEY
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

  app.get("/Bookmarks/Update?:id", function(req, res) {
    var id = (req.params.id).slice(1);
    db.BookMark.findOne({
      where:{
        id:id
      }
    }).then(function(result) {
      res.render("update", {
        data: result
      });
    });   
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });  
};

