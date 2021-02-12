import { Router } from "express";
import orderDetailCtrl from '../controllers/orderDetail.controller';

const router = Router();

router.get('/',orderDetailCtrl.readOrderDetailMethod);

export default router;