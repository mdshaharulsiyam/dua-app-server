const GetAllCategoryDB = require("../../lib/Category/GetAllCategoryDB")

const GetAllCategory = async (req, res) => {
    const {category} = req.query;
    const result = await GetAllCategoryDB(category)
    res.send(result)
}
module.exports = GetAllCategory