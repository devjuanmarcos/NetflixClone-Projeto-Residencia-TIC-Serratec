const express = require("express");
const router = express.Router();
const Filme = require("../models/filme");

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
router.post("/", (req, res) => {
  const body = req.body;
  res.json(body);
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
