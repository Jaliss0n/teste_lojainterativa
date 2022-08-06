const express = require('express');
const dados = require ('../controllers/dados.js');

const router = express.Router();


// rotas para Cliente 
router.post('/dado', dados.Insert);
router.get('/dado', dados.SelectAll);
router.get('/dado/:id', dados.SelectDetail);
router.put('/dado/:id', dados.Update);
router.delete('/dado/:id', dados.Delete);


module.exports = router;