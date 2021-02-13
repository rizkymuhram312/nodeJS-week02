import { response, Router } from 'express';
import cartController from '../controllers/cart.controller'
import orderDetailController from '../controllers/oderDetail.controller'
import apiCart from "../controllers/apiCartOrder";


const router = Router()
router.get('/',cartController.findAllCart)
router.get('/all',cartController.findAllCartWOrdi)
router.post('/',cartController.cartCheck,orderDetailController.addProductToOrderDetail);

router.post('/addCart',apiCart.createCartItems,cartController.findAllCart);

//router.get('/users-address',usersController.findUserWAddress);

export default(router)
