const GetAllCategoryDB = require("../../lib/Category/GetAllCategoryDB")

const GetAllCategory = async (req, res) => {
    const result = await GetAllCategoryDB()
    res.send(result)
}
module.exports = GetAllCategory