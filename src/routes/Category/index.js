const GetAllCategory = require('../../api/category/GetAllCategory')
const  GetAllSubCategory = require('../../api/category/GetAllSubCategory')

const router = require('express').Router()
router.get('/category',GetAllCategory )
router.get('/subcategory',GetAllSubCategory )

module.exports = router