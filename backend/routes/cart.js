// 1. import module Router & sequalize
import { Router } from 'express';
import cartCtrl from '../controllers/cart.controller'
import cartAPI from '../controllers/cart.controller'


//2. create object Router dan simpan di variable router
const router = Router();

router.get('/', cartCtrl.readCartMethod);
router.get('/:cartId', cartCtrl.findCartMethod);
router.post('/', cartCtrl.addCartMethod);
router.put('/:cartId', cartCtrl.editCartMethod);
router.post('/', cartAPI.createCartItems);


export default router;


