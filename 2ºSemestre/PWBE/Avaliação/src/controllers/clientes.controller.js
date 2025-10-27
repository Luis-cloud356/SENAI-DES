const clientes = require("../data/clientes.data");

const listar=(req,res)=>{
    res.send(clientes).end();
};

const buscar=(req, res)=>{
    const cpf = req.params.cpf;

    var user = "";

    clientes.forEach((cliente, index)=>{
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





module.exports={
    listar,
    buscar,
    cadastrar
   
};