const mongoose = require('mongoose');

const blogSchema =new mongoose.Schema({
    url:{
        type:String,
        required:[true, "Url is required field"],
    },
    alt:{
        type:String,
        required:[true, "Image is required field"],
    },

    title:{
        type:String,
        required:[true, "Title is required field"],
        unique:true,
    },

    desc : {
        type:String,
        required:[true, "Description is required field"],
    }
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;