import { Router } from 'express';
import userController from '../controllers/users.controller'
const router = Router()

router.get('/',userController.findAllUsers);
router.post('/',userController.createUser);
router.put('/',userController.updateUser)
router.delete('/',userController.deleteUser)
router.get('/find/:username',userController.findUser);
//router.get('/users-address',usersController.findUserWAddress);

router.post('/addUsers',userController.createUsersAddress,userController.findAllUsers);

export default(router)