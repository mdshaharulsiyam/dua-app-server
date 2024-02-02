const Category = require("../../models/Category");

const GetAllCategoryDB = async () => {
    try {
        const query = { role: { $regex: `${seacrhValue}`, $options: 'i' } };
        return await Category.find(query).skip(parseInt(pageNumber) * parseInt(itemPerPage)).limit(parseInt(itemPerPage));
    } catch (error) {
        return { success: false, error: error };
    }
}
module.exports = GetAllCategoryDB