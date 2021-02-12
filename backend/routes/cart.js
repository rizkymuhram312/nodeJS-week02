import { response, Router } from 'express';
import cartController from '../controllers/cart.controller'
import orderDetailController from '../controllers/oderDetail.controller'
import cartItemsController from '../controllers/apiCartOrder2'

const router = Router()
router.get('/',cartController.findAllCart)
router.get('/all',cartController.findAllCartWOrdi)
router.post('/',cartController.cartCheck,orderDetailController.addProductToOrderDetail);
router.post('/add',cartItemsController.createCartItems);
//router.get('/users-address',usersController.findUserWAddress);

export default(router)
