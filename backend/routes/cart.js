import { Router } from "express";
import cartCtrl from '../controllers/cart.controller';

const router = Router();

router.get('/',cartCtrl.readCartMethod);
router.post('/',cartCtrl.addCartMethod);

export default router;