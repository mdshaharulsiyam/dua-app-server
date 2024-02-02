const GetAllCategory = require('../../api/category/GetAllCategory')

const router = require('express').Router()
router.get('/category',GetAllCategory )

module.exports = router