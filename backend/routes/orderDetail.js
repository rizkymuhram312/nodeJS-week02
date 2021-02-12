// 1. import module Router & sequalize
import { Router } from 'express';
import orderDetailCtrl from '../controllers/orderDetail.controller'

//2. create object Router dan simpan di variable router
const router = Router();

router.get('/', orderDetailCtrl.readOrderDetail);
router.get('/:orderDetailId', orderDetailCtrl.findOrderDetail);
router.post('/', orderDetailCtrl.addOrderDetail);
// router.put('/:orderDetailId', orderDetailCtrl.editCartMethod);

export default router;


