const { Schema, model } = require("mongoose");

const DuaSchema = new Schema({
    'id': {
        type: Number,
        required: false
    },
    "cat_id": {
        type: Number,
        required: false
    },
    "subcat_id": {
        type: Number,
        required: false
    },
    "dua_id": {
        type: Number,
        required: false
    },
    "dua_name_bn": {
        type: String,
        required: false
    },
    "dua_name_en": {
        type: String,
        required: false
    },
    "top_bn": {
        type: String,
        required: false
    },
    "top_en": {
        type: String,
        required: false
    },
    "dua_arabic": {
        type: String,
        required: false
    },
    "dua_indopak": {
        type: String,
        required: false
    },
    "clean_arabic": {
        type: String,
        required: false
    },
    "transliteration_bn": {
        type: String,
        required: false
    },
    "transliteration_en": {
        type: String,
        required: false
    },
    "translation_en": {
        type: String,
        required: false
    },
    "translation_bn": {
        type: String,
        required: false
    },
    "refference_bn": {
        type: String,
        required: false
    },
    "refference_en": {
        type: String,
        required: false
    },
    "audio": {
        type: String,
        required: false
    },
})

const Dua= model("Dua",DuaSchema)

module.exports = Dua