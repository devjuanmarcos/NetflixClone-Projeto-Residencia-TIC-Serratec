const mongoose = require("mongoose");

const Filme = mongoose.model("Filme", {
  titulo: String,
  atores: Array,
  ano: Number,
  detalhes: Object,
  premicoes: [Object],
});

module.exports = Filme;
