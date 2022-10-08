const {Router} = require('express');
const router = Router();
const { getDataUcamp, getDataUcamp2, getDataUcamp3 } = require('../controllers/ucampers.ctrl');

router.get('/', getDataUcamp)
router.get('/dos', getDataUcamp2)
router.get('/tres', getDataUcamp3)

module.exports = router