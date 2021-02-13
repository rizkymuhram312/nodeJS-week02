import { Router } from 'express';
import userController from '../controllers/users.controller'
import apiUserOrder from '../controllers/apiUserOrder'
const router = Router()

router.get('/',userController.findAllUsers);
router.post('/',userController.createUser);
router.put('/',userController.updateUser)
router.delete('/',userController.deleteUser)
router.get('/find/:username',userController.findUser);
router.post('/orders',apiUserOrder.createUserOrder)
//router.get('/users-address',usersController.findUserWAddress);

router.post('/addUsers',userController.createUsersAddress,userController.findAllUsers);

export default(router)