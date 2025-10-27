const pedidos = require("../data/pedidos.data");

const listar=(req,res)=>{
    res.send(pedidos).end();
};

const buscar=(req, res)=>{
    const cpf = req.params.cpf;

    var user = "";

    pedidos.forEach((cliente, index)=>{
        if(cliente.cpf === cpf){
            user = cliente;
        }
    });

    if(user === "") user = "Não Encontrado";

    res.send(user).end();

};

const cadastrar = (req, res)=>{
   const data =req.body;
   clientes.push(data);
   res.status(201).send("Cadastrado Com Sucesso").end();
};
const atualizar = (req, res) => {
    const order = req.body;

    var cancelado = false;


    pedidos.forEach((pedido, index) => {
       if(pedido.status === order.status) {
        pedidos[index] = order;
        enviado = true;
        cancelado = false;
       }
    });

    if(enviado == true) {
        res.status (404).end();
    }else {
        res.status(201).end();
    }
};





module.exports={
    listar,
    buscar,
    cadastrar,
    atualizar
   
};