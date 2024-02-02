const GetAllSubCategoryDB = require("../../lib/Category/GetAllSubCategoryDB")

const GetAllSubCategory = async (req, res) => {
    const {cat_id} = req.query;
    const result = await GetAllSubCategoryDB(cat_id)
    res.send(result)
}

module.exports = GetAllSubCategory
