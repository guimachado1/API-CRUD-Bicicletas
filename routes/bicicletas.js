const express = require('express');
const BicicletaController = require('../controllers/BicicletaController');
const authMiddleware = require('../middlewares/auth');

const router = express.Router();

router.get('/bicicletas', BicicletaController.index);
router.get('/bicicletas/:id', BicicletaController.show);
router.post('/bicicletas', authMiddleware, BicicletaController.store);
router.put('/bicicletas/:id', authMiddleware, BicicletaController.update);
router.delete('/bicicletas/:id', authMiddleware, BicicletaController.destroy);

module.exports = router;