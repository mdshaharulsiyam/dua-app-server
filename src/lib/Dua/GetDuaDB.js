const Dua = require("../../models/Dua")

const GetDuaDB = async()=>{
    return await Dua.find({})
}
module.exports = GetDuaDB