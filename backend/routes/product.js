  // 1. import module Router & sequalize
import { Router } from 'express';
import productCtrl from '../controllers/product.controller';

//2. create object Router dan simpan di variable router
const router = Router();

router.get('/', productCtrl.readProductMethod);
//add api show all prodcut with images
router.get('/with-images',productCtrl.findProductWImage)
router.get('/:prod_id', productCtrl.findProductMethod);
router.post('/', productCtrl.addProductMethod);
router.put('/:prod_id', productCtrl.editProductMethod);
router.delete('/:prod_id', productCtrl.deleteProductMethod);

export default router;