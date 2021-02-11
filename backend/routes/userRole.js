// 1. import module Router
import { Router } from 'express';
import userRoleCtrl from '../controllers/userRole.controller'



//2. create object Router dan simpan di variable router
const router = Router();


router.get('/', userRoleCtrl.findUserRole);
router.post('/', userRoleCtrl.addUserRole);
router.put('/', userRoleCtrl.editUserRole);
router.get('/:userId', userRoleCtrl.findIdUserRole);
router.delete('/:userId', userRoleCtrl.deleteUserRole);


export default router;
