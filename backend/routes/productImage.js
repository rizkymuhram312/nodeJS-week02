// 1. import module Router
import { Router } from 'express';
import primCtrl from '../controllers/productImage.controller'

//2. create object Router dan simpan di variable router
const router = Router();

router.get('/', primCtrl.findProductImage);
router.post('/', primCtrl.createProductImage);
router.put('/', primCtrl.updateProductImage);
router.delete('/', primCtrl.deleteProductImage);

export default router;