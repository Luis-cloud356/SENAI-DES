const prisma = require("../data/prisma");

const novoCarro = async (req, res) => {
    const carro = req.body;
    let carros = carro.placa.trim().toUpperCase();
    if (carros.length < 7)
        console.log("Placa Incorreta");

    if(carros.length < 4)
        console.log("Ano errado")

    if (typeof (carro.ano) == "number")
       res.status(400).json({message: "Ano errado!"});

    const ncarros = await prisma.carros.create({
        data: carro
    });
    res.json(ncarros).status(201).end();
};

const listarCarros = async (req, res) => {
    const carro = await prisma.carros.findMany();

    res.json(carro).status(200).end();
};

const buscarCarro = async (req, res) => {
    const { id } = req.params;

    const carro = await prisma.carros.findUnique({
        where: { id },
        include: {
            carros: true
        }
    });

    res.json(carro).status(200).end();
};

const apagarCarro = async (req, res) => {
    const { id } = req.params;

    const carro = await prisma.carros.delete({
        where: { id }
    });

    res.json(carro).status(200).end();
};

const atualizarCarro = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;

    const carro = await prisma.carros.update({
        where: { id },
        data: dados
    });

    res.json(carro).status(200).end();
};

module.exports = {
    novoCarro,
    listarCarros,
    buscarCarro,
    apagarCarro,
    atualizarCarro
}