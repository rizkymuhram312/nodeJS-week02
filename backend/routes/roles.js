import {Router} from 'express'
import rolesCtrl from  '../controllers/roles.controller'

const router = Router();

router.get('/', rolesCtrl.readRolesMethod);
router.get('/:roleId', rolesCtrl.findRolesMethod);
router.post('/', rolesCtrl.addRolesMethod);
router.delete('/:roleId', rolesCtrl.deleteRolesMethod);
router.put('/:roleId', rolesCtrl.editRolesMethod);

export default router;

