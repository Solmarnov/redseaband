const db = require('../models');

// Methods for the musicController
module.exports = {
  findAll: function(req, res) {
    console.log(req.query);
    db.Music
    .find(req.query)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Music
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Music
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }
}