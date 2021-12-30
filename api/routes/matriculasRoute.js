const {Router} = require('express');
const MatriculaController = require('../controllers/MatriculaController');

const router = Router();

router.get('/matriculas', MatriculaController.buscarMatricula)

router.get('/matriculas/:id', MatriculaController.buscarUmaMatricula)

router.post('/pessoas/:estudante_id/matriculas', MatriculaController.criarMatricula)

router.post('/pessoas/:estudante_id/matriculas/:matriculas_id', MatriculaController.atualizarMatricula)

router.post('/pessoas/:estudante_id/deletarMatriculas/:matriculas_id', MatriculaController.deletarMatricula)


module.exports = router;