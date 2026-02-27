const prisma = require("../data/prisma");

const novoCliente = async (req, res) => {
    const cliente = req.body;

    let clientes = cliente.nome.trim().split(" ");

    if (clientes.length < 2) {
        res.status(400).json({ message: "Nome sem separação" });
    }

    let cpf = cliente.cpf.replaceAll(".","").replaceAll("-","").toLowerCase();

    if (cpf.length != 11) {
        res.status(400).json({ message: " CPF inválido!" });
    }

    cliente.cpf = cpf;

    if (typeof (cliente.cpf) == "number")
        res.status(400).json({ message: " CPF errado!" });

    let emailValido = cliente.email.includes("@");
    if(emailValido = false)
        console.log("Email Inválido")

let email = carro.email;
    if (carro.placa.some(e => e = email))
        res.status(400).json({ message: "Email ja existe" });

    

    const nclientes = await prisma.clientes.create({
        data: cliente
    });
    res.json(nclientes).status(201).end();
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