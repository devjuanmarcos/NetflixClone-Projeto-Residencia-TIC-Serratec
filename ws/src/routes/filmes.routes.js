const express = require("express");
const { sanitizeFilter } = require("mongoose");
const router = express.Router();
const _ = require("underscore");
const Filme = require("../models/filme.js");
const Temporada = require("../models/temporada.js");

// recuperar tela home
router.get("/home", async (req, res) => {
  try {
    // recuperar todos os filmes
    let filmes = await Filme.find({});
    let finalFilmes = [];

    // recuperando temporadas
    for (let filme of filmes) {
      const temporadas = await Temporada.find({
        filme_id: filme._id,
      });
      const newFilme = { ...filme._doc, temporadas };
      finalFilmes.push(newFilme);
    }

    // misturar resultados aleatórimanente
    finalFilmes = _.shuffle(finalFilmes);

    // filme principal
    const principal = finalFilmes[0];

    //separar em seções
    const secoes = _.chunk(finalFilmes, 5);
    res.json({ error: false, principal, secoes });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

// recuperar todos os registros
router.get("/", async (req, res) => {
  try {
    const filmes = await Filme.find({});
    res.json({ error: false, filmes });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

// pegar registro somente com o id
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const filme = await Filme.findById(id);
    res.json({ error: false, filme });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

// criar um registro
router.post("/", async (req, res) => {
  try {
    const filme = req.body;
    const response = await new Filme(filme).save();
    res.json({ error: false, filme: response });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});
// atualizar registro somente com o id
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const novo_filme = req.body;
    const filme = await Filme.findByIdAndUpdate(id, novo_filme);
    res.json({ error: false, filme });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

// deletar registro somente com o id
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await Filme.findByIdAndDelete(id);
    res.json({ error: false });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
