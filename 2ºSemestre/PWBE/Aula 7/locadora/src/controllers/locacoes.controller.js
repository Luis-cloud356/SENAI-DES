const db = require("../data/connection");

const listarLocacoes = async (req, res) => {
    const lista = await db.query("SELECT * FROM locacoes");
    res.json(lista[0]).end();
}

const buscarLocacao = async (req, res) => {
    const idLocacao = req.params.id;
    const locacao = await db.query("SELECT * FROM locacoes WHERE id = " + idLocacao);
    res.json(locacao[0][0]).end();
}

const cadastrarLocacao = async (req, res) => {
    const {cliente_id,filme_id, data_locacao,status, preco } = req.body;

    const novaLocacao = await db.query("INSERT INTO locacoes VALUES (DEFAULT, ?, ?, ?, ?, ?)", [cliente_id,filme_id,data_locacao, status,preco]);

    const locacao = {
        id: novaLocacao[0].insertId,
        nome: cliente_id,
        filme: filme_id,
        data: data_locacao,
        status: status,
        preco: preco
    }

    res.json(locacao).status(201).end();
}

const excluirLocacao = async (req, res) => {
          const id = req.params.id;

          try {
                 const remove = await db.query("DELETE FROM locacoes WHERE id = ?", [id]);

                 console.log(remove);

                 res.status(200).end();
          } catch(error) {
                    console.log(error);  

                    const err = { msg : "" };

                    if(error.errno === 1451) {
                            err.msg = "Locação registrada";
                    }

                    res.status(500).json(err).end();
          }
};

const atualizarLocacao = async (req, res) => {
    const {id,cliente_id,filme_id, data_locacao, status, preco} = req.body;

    try {
         const update = await db.query("UPDATE locacoes SET cliente_id = ?, filme_id = ?, data_locacao = ?, status = ?, preco = ? WHERE id = ?", [cliente_id, filme_id,data_locacao,status, preco, id]);

         const info = {msg:""};

         if(update[0].affectedRows === 1) {
            info.msg = "Atualizado com Sucesso";
         }else if(update[0].affectedRows === 0) {
            info.msg = "Locação não encontrado";
         }

         res.status(200).json(info).end();
    }catch(error) {
        console.log(error);
        
        res.status(500).end();
    }
};

const listarLocacoesIdCliente = async (req, res) => {
    const idCliente = req.params.idCliente;
    const lista = await db.query("SELECT * FROM locacoes WHERE cliente_id = ?", [idCliente]);
    res.json(lista[0]).end();
};

const listarLocacoesStatus = async (req, res) => {
    const status = req.params.status;
    const lista = await db.query("SELECT * FROM locacoes WHERE status = ?", [status]);
    res.json(lista[0]).end();
};

const calcularTotalFaturamentoLocacao = async (req, res) => {
     const faturamento = await db.query("SELECT SUM(preco) as faturamento_total FROM locacoes");
     res.json(faturamento[0]).end();
};

const faturamentoQuantidadeLocacoes = async (req, res) => {
  const fat_qnt_loc_mes=async(req,res)=>{
const list_fat=await db.query("select month(data_locacao), count(locacoes.filme_id), sum(filmes.preco) as 'fat_qnt_mes' from locacoes inner join filmes on locacoes.filme_id=filmes.id group by data_locacao;");
res.status(201).json(list_fat[0]).end();
  }

}
    module.exports = {
     listarLocacoes,
     buscarLocacao,
     cadastrarLocacao,
     excluirLocacao,
     atualizarLocacao,
     listarLocacoesIdCliente,
     listarLocacoesStatus,
     calcularTotalFaturamentoLocacao,
     faturamentoQuantidadeLocacoes
}