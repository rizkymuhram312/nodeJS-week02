import { response, Router } from 'express';
import cartController from '../controllers/cart.controller'
import orderDetailController from '../controllers/oderDetail.controller'

const router = Router()
router.get('/',cartController.findAllCart)
router.get('/all',cartController.findAllCartWOrdi)
router.post('/',cartController.cartCheck,orderDetailController.addProductToOrderDetail);
//router.get('/users-address',usersController.findUserWAddress);

export default(router)