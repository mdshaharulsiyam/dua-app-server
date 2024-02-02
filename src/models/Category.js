const { model, Schema } = require("mongoose");

const CategorySchema = new Schema({
    'id':{
        type:Number ,
        required: true
    },
    "cat_id":{
        type:Number ,
        required: true
    },
    "cat_name_bn":{
        type:String ,
        required: true
    },
    "cat_name_en":{
        type:String,
        required : true
    },
    "no_of_subcat":{
        type:Number ,
        required: true
    },
    "no_of_dua":{
        type:Number ,
        required: true
    },
    "cat_icon":{
        type:String ,
        required: true
    },
   
})


const Category= model("Category",CategorySchema)

module.exports = Category