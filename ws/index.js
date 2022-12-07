const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const database = require("./src/services/database");
const cors = require("cors");
const app = express();

const filmeRoutes = require("./src/routes/filmes.routes");
const usuarioRoutes = require("./src/routes/usuarios.routes");

/// MIDDLEWARES
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

/// ROUTES
app.use("/", filmeRoutes);
app.use("/usuario", usuarioRoutes);

app.listen(3000, () => {
  console.log("Meu servidor está funcionando");
});
