const express = require('express');
const cors = require('cors');

const clienteRoutes = require("./src/routes/cliente.routes");
const estoqueRoutes = require("./src/routes/estoque.routes");
const produtosRoutes = require("./src/routes/produtos.routes");
const vendasRoutes = require("./src/routes/vendas.routes")
const app = express();

app.use(express.json());
app.use(cors());

app.use(clienteRoutes);
app.use(estoqueRoutes);
app.use(produtosRoutes);
app.use(vendasRoutes);

app.listen(3000, () => {
    console.log("Servidor Online");
});