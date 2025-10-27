const express = require("express");
const router = express.Router();

const ReservasController = require("../controllers/reservas.controller");
router.get("/clientes/:matricula", ReservasController.buscar);
router.post("/clientes", ResevasController.cadastrar);


module.exports = router;