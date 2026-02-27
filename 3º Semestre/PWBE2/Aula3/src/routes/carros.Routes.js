const express = require("express");

const router = express.Router();

const carrosController = require("../controllers/carros.controller");
const { carros } = require("../data/prisma");

router.post("/cadastrar", carrosController.novoCarro);
router.get("/listar", carrosController.listarCarros);
router.get("/buscar/:id",carrosController.buscarCarro);
router.put("/atualizar/:id", carrosController.listarCarros);
router.delete("/deletar/:id", carrosController.apagarCarro);

module.exports = router;
