import { response, Router } from 'express';
import cartController from '../controllers/cart.controller'
import ordersController from '../controllers/orders.controller'

const router = Router()
router.get('/',ordersController.readOrders)

router.post('/addOrder',ordersController.createOrderItems,ordersController.readOrders);

// router.get('/all',ordersController.findAllCartWOrdi)
// router.post('/',ordersController.cartCheck,orderDetailController.addProductToOrderDetail);
//router.get('/users-address',usersController.findUserWAddress);

export default(router)
