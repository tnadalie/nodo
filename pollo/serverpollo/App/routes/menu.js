const router = require('express').Router();
const menuCtrl = require('../controllers/menu');
const multer = require('../middleware/multer-config');


router.post('/', menuCtrl.createMenu);
router.get('/', menuCtrl.getMenus);
router.get('/:id', menuCtrl.GetMenu);

module.exports = router;
