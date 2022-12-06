const express = require("express");
const router = express.Router();
const Filme = require("../models/filme.js");

// recuperar todos os registros
router.get("/", (req, res) => {
  res.json({ mensagem: "PEGAR TODOS OS REGISTROS" });
});

// pegar registro somente com o id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ mensagem: `PEGAR SOMENTE O REGISTRO COM O ID: ${id}` });
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
router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ mensagem: `ATUALIZAR SOMENTE O REGISTRO COM O ID: ${id}` });
});

// deletar registro somente com o id
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ mensagem: `DELETAR SOMENTE O REGISTRO COM O ID: ${id}` });
});

module.exports = router;
