const express = require('express');
const { asyncWrap } = require('../utils/errorHandler');

const { orderController } = require('../controllers');
const { verifyToken } = require('../middleware/auth');

const orderRouter = express.Router();

// orderRouter.post('/', orderController.createOrders); // 토큰 없이
// orderRouter.post('/', verifyToken, orderController.createOrders); //토큰 있이
orderRouter.post('/', verifyToken, asyncWrap(orderController.createOrders)); // async 사용 -> try, catch, next 사용할 필요 없음

module.exports = { orderRouter };
