const Dua = require("../../models/Dua")
const SubCategory = require("../../models/SubCategory")

const GetDuaDB = async (category) => {
    const allSubCategory = await SubCategory.find({ cat_id: category })
    const data = await Promise.all(allSubCategory.map(async (item) => {
        const duas = await Dua.find({ subcat_id: item?.subcat_id })
        return { data: { item, duas } }
    }))
    return data
}
module.exports = GetDuaDB
