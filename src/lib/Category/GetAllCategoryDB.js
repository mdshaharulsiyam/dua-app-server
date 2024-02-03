const Category = require("../../models/Category");

const GetAllCategoryDB = async (category) => {
    try {
        let query = {}
        if (category) {
            query = { cat_name_en: { $regex: `${category}`, $options: 'i' } };
        }
        return await Category.find(query)
    } catch (error) {
        return { success: false, error: error };
    }
}
module.exports = GetAllCategoryDB