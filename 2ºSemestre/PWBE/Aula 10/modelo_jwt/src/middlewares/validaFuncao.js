const validaAdministrador = (req, res, next) => {
         const usuario = req.headers['user'];

         if(usuario.cargo.toLowerCase() === "gerente") {
                  next();
         }else {
            res.status(401).json({
                msg:"Usuario sem permissao"
            }).end();
         }
};

const validaAtendente = (req, res, next) => {
    const usuario = req.headers['user'];

    if(usuario.cargo.toLowerCase() === "editor") {
        next();
    }else {
        res.status(401).json({
            msg:"Usuario sem permissao"
        }).end();
    }
};

const validaMedico = (req, res, next) => {
    const usuario = req.headers['user'];

    if(usuario.cargo.toLowerCase() === "editor") {
        next();
    }else {
        res.status(401).json({
            msg:"Usuario sem permissao"
        }).end();
    }
};

module.exports = {
    validaAdministrador,
    validaAtendente,
    validaMedico,
}