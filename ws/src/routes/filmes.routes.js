const express = require("express");
const router = express.Router();
const Filme = require("../models/filme.js");

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
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ mensagem: `DELETAR SOMENTE O REGISTRO COM O ID: ${id}` });
});

module.exports = router;
