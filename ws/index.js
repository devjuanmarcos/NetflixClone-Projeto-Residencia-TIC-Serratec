const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

// recuperar todos os registros
app.get("/", (req, res) => {
  res.json({ mensagem: "PEGAR TODOS OS REGISTROS" });
});

// pegar registro somente com o id
app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ mensagem: `PEGAR SOMENTE O REGISTRO COM O ID: ${id}` });
});

// criar um registro
app.post("/", (req, res) => {
  const body = req.body;
  res.json(body);
});

// atualizar registro somente com o id
app.put("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ mensagem: `ATUALIZAR SOMENTE O REGISTRO COM O ID: ${id}` });
});

// deletar registro somente com o id
app.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ mensagem: `DELETAR SOMENTE O REGISTRO COM O ID: ${id}` });
});

app.listen(3000, () => {
  console.log("Meu servidor está funcionando");
});
