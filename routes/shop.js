const path = require('path');

const express = require('express');

// const rootDir = require('../util/path');
// rootDir Sudah tidak digunakan lagi jika menggunakan konsep MVC


const productsController = require('../controllers/products')

const router = express.Router();

router.get('/', productsController.getProduct);

module.exports = router;
