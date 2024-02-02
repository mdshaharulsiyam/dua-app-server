const GetAllUserDB = require("../../lib/Category/GetAllUserDB");
const GetAllCategory = async (req, res) => {
    const result = await GetAllUserDB(useremail,seacrhValue,itemPerPage,pageNumber)
    res.send(result)
}
module.exports = GetAllCategory