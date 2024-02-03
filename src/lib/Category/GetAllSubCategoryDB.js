const SubCategory = require("../../models/SubCategory")

const GetAllSubCategoryDB = async(cat_id)=>{
    try {
        console.log('link hitted')
        return await SubCategory.find({cat_id : parseInt(cat_id)})
    } catch (error) {
        console.log(error)
        return {mag:'unable to fetch data'}
    }
}
module.exports = GetAllSubCategoryDB