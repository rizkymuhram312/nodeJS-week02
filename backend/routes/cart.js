// 1. import module Router
import { Router } from 'express';
import cartController from '../controllers/cart.controller'


//2. create object Router dan simpan di variable router
const router = Router();

// router.get('/', cartController.findCart);
// router.post('/', cartController.createCart);
// router.put('/', primCtrl.updateProductImage);
// router.delete('/', primCtrl.deleteProductImage);
router.post('/addCart', cartController.createCartItem);

export default router;