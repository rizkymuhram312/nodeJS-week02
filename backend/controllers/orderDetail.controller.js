import { Router } from 'express';
import { sequelize, Op } from '../models/index';



// put your business logic using method sequalize
const readOrderDetail = async (req, res) => {
    const orderDetail = await req.context.models.orderDetail.findAll(

  );
    return res.send(orderDetail); 
}

//filter pencarian data dengan primary key
const findOrderDetail = async (req, res) => {
    const orderDetail = await req.context.models.orderDetail.findByPk(
      req.params.orderDetailId
    );
    return res.send(orderDetail);
};


//tambah data
const addOrderDetail = async (req, res) => {
    const {ordi_quantity, ordi_price, ordi_cart_id, ordi_prod_id, ordi_order_name} = req.body;
    const orderDetail = await req.context.models.orderDetail.create({
        ordi_quantity : ordi_quantity,
        ordi_price : ordi_price,
        ordi_cart_id : ordi_cart_id,
        ordi_prod_id : ordi_prod_id,
        ordi_order_name : ordi_order_name
    });
    return res.send(orderDetail);
};

// //ubah data
// // Change everyone without a last name to "Doe"
// const editOrderDetail = async (req, res) => {
//     const {order_detail_created_on, order_detail_is_closed, order_detail_total, order_detail_user_id} = req.body;
//     const order_detail =  await req.context.models.order_detail.update({    
//         order_detail_created_on : order_detail_created_on,
//         order_detail_is_closed : order_detail_is_closed,
//         order_detail_total : order_detail_total,
//         order_detail_user_id : order_detail_user_id
//      }, {
//         where: { order_detail_id: req.params.order_detailId }
//           });
//         return res.sendStatus(200);
//   };







// Gunakan export default agar semua function bisa dipakai di file lain.
export default{
    readOrderDetail,
    findOrderDetail,
    addOrderDetail,
    // editOrderDetail
}