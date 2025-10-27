const express = require("express"); //Importa um modulo
const cors = require("cors");

const ReservasRoutes = require("./src/routes/usuarios.routes");


const app = express(); 

app.use(cors()); 
app.use(express.json ());

app.use(ReservasRoutes);
app.listen(3000, () => {
    console.log("Servidor Online na porta 3000");
});