const GetDuaDB = require("../../lib/Dua/GetDuaDB")

const GetDua = async (req, res) => {
    const {category}= req.query
    const result = await GetDuaDB(category)
    res.send(result)
}
module.exports = GetDua