const express = require('express')
const router = express.Router()
const {createProduct,getProducts,updateProducts,deleteProducts} = require('../controller/product.controller')

router.post('/',createProduct)
router.get('/',getProducts)
router.put('/:id',updateProducts)
router.delete('/:id',deleteProducts)

module.exports = router