import { Router } from 'express';
import { sequelize, Op } from '../models/index';



// put your business logic using method sequalize
const readOrders = async (req, res) => {
    const orders = await req.context.models.orders.findAll(
    // {
    //   include: [{
    //       model: req.context.models.address
    //   }]
    // }
  );
    return res.send(orders); 
}

//filter pencarian data dengan primary key
const findOrders = async (req, res) => {
    const orders = await req.context.models.orders.findByPk(
      req.params.ordersId
    //   ,{
    //     include: [{
    //         model: req.context.models.address
    //     }]
    //   }
    );
    return res.send(orders);
};


//tambah data
const addOrders = async (req, res) => {
    const {order_name, order_created_on, order_is_closed, order_total, order_user_id} = req.body;
    const orders = await req.context.models.orders.create({
      order_name: order_name,
      order_create_on : order_create_on,
      order_is_closed : order_is_closed,
      order_total : order_total,
      order_user_id : order_user_id
    });
    return res.send(orders);
};





// Gunakan export default agar semua function bisa dipakai di file lain.
export default{
    readOrders,
    findOrders,
    addOrders
}