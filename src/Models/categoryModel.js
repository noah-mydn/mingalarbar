const mongoose = require('mongoose');

const categorySchema =new mongoose.Schema({
    category:{
        type:String,
        required:[true, "Category is required field"],
        unique:true,
    },
    imageUrl:{
        type:String,
        required:[true, "Image is required field"],
    },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;