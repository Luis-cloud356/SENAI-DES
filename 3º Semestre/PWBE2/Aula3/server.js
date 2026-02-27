require("dotenv").config();

const express = require("express");
const cors = require("cors");

const carrosRoutes = require("./src/routes/carros.Routes");
// const clientesRoutes = require("./src/routes/clientes.Routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(carrosRoutes);
// app.use(clientesRoutes);
 
app.listen(process.env.PORT_APP, () => {
    console.log("Online na porta " + process.env.PORT_APP);
});