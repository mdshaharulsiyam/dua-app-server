const { model, Schema } = require("mongoose");

const SubCategorySchema = new Schema({
    'id':{
        type:Number ,
        required: true
    },
    "cat_id":{
        type:Number ,
        required: true
    },
    "subcat_id":{
        type:Number ,
        required: true
    },
    "subcat_name_bn":{
        type:String,
        required : true
    },
    "subcat_name_en":{
        type:String ,
        required: true
    },
    "no_of_dua":{
        type:Number ,
        required: true
    },
})


const SubCategory= model("SubCategory",SubCategorySchema)

module.exports = SubCategory