// Define a utilização do model usuario e a dependência http-status
const Dados = require('../models/tabDado');
const status = require('http-status');

// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {

    // dados
    const id = req.body.id;
    const fab = req.body.fab;
    const cat1 = req.body.cat1;
    const cat2 = req.body.cat2;
    const cat3 = req.body.cat3;
    const prod = req.body.prod;
    const preco = req.body.preco;
    const fab_selec = req.body.fab_selec;
    const cat_selec = req.body.cat_selec;


    // Popula cada um dos campos do model com os campos recebido na request
    Dados.create({

        id: id,
        fab: fab,
        cat1: cat1,
        cat2: cat2,
        cat3: cat3,
        prod: prod,
        preco: preco,
        fab_selec: fab_selec,
        cat_selec: cat_selec,


    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(dado => {
            if (dado) {
                res.status(status.OK).send(dado);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};

exports.SelectAll = (req, res, next) => {
    Dados.findAll()
        .then(dado => {
            if (dado) {
                res.status(status.OK).send(dado);
            }
        })
        .catch(error => next(error));
}

exports.SelectDetail = (req, res, next) => {
    const id = req.params.id;

    Dados.findByPk(id)
        .then(dado => {
            if (dado) {
                res.status(status.OK).send(dado);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Update = (req, res, next) => {

    // dados
    const id = req.body.id;
    const fab = req.body.fab;
    const cat1 = req.body.cat1;
    const cat2 = req.body.cat2;
    const cat3 = req.body.cat3;
    const prod = req.body.prod;
    const preco = req.body.preco;
    const fab_selec = req.body.fab_selec;
    const cat_selec = req.body.cat_selec;


    Dados.findByPk(id)
        .then(dado => {
            if (dado) {
                dado.update({
                    id: id,
                    fab: fab,
                    cat1: cat1,
                    cat2: cat2,
                    cat3: cat3,
                    prod: prod,
                    preco: preco,
                    fab_selec: fab_selec,
                    cat_selec: cat_selec,
                },
                    {
                        where: { id: id }
                    })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Dados.findByPk(id)
        .then(dado => {
            if (dado) {
                dado.destroy({
                    where: { id: id }
                })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            }
            else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};
