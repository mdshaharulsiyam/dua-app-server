const GetDuaDB = require("../../lib/Dua/GetDuaDB")

const GetDua = async (req, res) => {
    const result = await GetDuaDB()
    res.send(result)
}
module.exports = GetDua