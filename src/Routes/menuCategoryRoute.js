const express = require('express');
const menuCateogryController = require('../Controllers/menuCategoryController');

const router= express.Router();

// router.route('/')
//       .get(menuCateogryController.getAllCategories)
//       .post(menuCateogryController.postNewCategory);


// router.route('/:id')
//      .get(menuCateogryController.getCategoryById)
//      .patch(menuCateogryController.updateCategory)
//      .delete(menuCateogryController.deleteCategory);
     
module.exports = router;