const GetAllCategory = require('../../api/category/GetAllCategory')

const router = require('express').Router()
router.post('/category',GetAllCategory )

module.exports = router