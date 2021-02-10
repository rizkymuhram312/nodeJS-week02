// 1. import module Router & sequalize
import { Router } from 'express';
import addressController from '../controllers/address.controller'

//2. create object Router dan simpan di variable router
const router = Router();

// 3. this function use method or function sequalize
// router.get('/', async (req, res) => {
//   const address = await req.context.models.address.findAll();
//   return res.send(address);
// });

// router.get('/:addr_id', async (req, res) => {
//   const address = await req.context.models.address.findByPk(
//     req.params.addr_id,
//   );
//   return res.send(address);
// });

// router.post('/', async (req, res) => {
//   const { addr_id, addr_email, addr_fullname, addr_phone_number, addr_is_default, addr_zipcode, addr_street1, addr_street2, add_city_id, add_user_id} = req.body;
//   const address = await req.context.models.address.create({
//     addr_id : addr_id,
//     addr_email : addr_email,
//     addr_fullname : addr_fullname,
//     addr_phone_number : addr_phone_number,
//     addr_is_default : addr_is_default,
//     addr_zipcode : addr_zipcode,
//     addr_street1 : addr_street1,
//     addr_street2 : addr_street2,
//     add_city_id : add_city_id,
//     add_user_id : add_user_id

//   });

//   return res.send(address);
// });

// /*  sesuaikan parameter yg diinput sama dengan attribute region_id di table
//  setelah clause where */
// router.delete('/:regionId', async (req, res) => {
//   const result = await req.context.models.Regions.destroy({
//     where: { region_id: req.params.regionId },
//   });

//   return res.send(true);
// });

router.get('/', addressController.allAddress);
router.get('/:addr_id', addressController.findAddress);
router.post('/', addressController.addAddress);
router.put('/:addr_id', addressController.editAddress);
router.delete('/:addr_id', addressController.deleteAddress);

export default router;