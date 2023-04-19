const express = require('express');
const menuController = require('../controllers/menusController');

const router= express.Router();

router.route('/')
      .get(menuController.getAllMenu)
      .post(menuController.postMenu);


router.route('/:id')
     .get(menuController.getMenuById)
     .patch(menuController.updateMenu)
     .delete(menuController.deleteMenu);
     
module.exports = router;