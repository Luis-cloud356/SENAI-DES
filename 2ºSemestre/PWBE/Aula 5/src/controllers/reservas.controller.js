const cadastrar = (req, res)=>{
   const data =req.body;
   clientes.push(data);
   res.status(201).send("Cadastrado Com Sucesso").end();
};
