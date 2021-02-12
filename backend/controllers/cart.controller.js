import { Router } from 'express';
import { sequelize, Op } from '../models/index';


const createCartItems = async (req, res, next) => {
  const {cart_id, cart_user_id, cart_is_closed, items} = req.body;
  console.log("");
}


// put your business logic using method sequalize
const readCartMethod = async (req, res) => {
    const cart = await req.context.models.cart.findAll(

      {
        include: [{
            model: req.context.models.orderDetail
        }]
      }

  );
    return res.send(cart); 
}

//filter pencarian data dengan primary key
const findCartMethod = async (req, res) => {
    const cart = await req.context.models.cart.findByPk(
      req.params.cartId
    );
    return res.send(cart);
};


//tambah data
const addCartMethod = async (req, res) => {
    const {cart_id, cart_created_on, cart_is_closed, cart_total, cart_user_id} = req.body;
    while( cart_id !== null){
      const cart = await req.context.models.cart.create({
        cart_created_on : cart_created_on,
        cart_is_closed : cart_is_closed,
        cart_total : cart_total,
        cart_user_id : cart_user_id
      });
    }
    return res.send(cart);
};

//ubah data
// Change everyone without a last name to "Doe"
const editCartMethod = async (req, res) => {
    const {cart_created_on, cart_is_closed, cart_total, cart_user_id} = req.body;
    const cart =  await req.context.models.cart.update({    
        cart_created_on : cart_created_on,
        cart_is_closed : cart_is_closed,
        cart_total : cart_total,
        cart_user_id : cart_user_id
     }, {
        where: { cart_id: req.params.cartId }
          });
        return res.sendStatus(200);
  };







// Gunakan export default agar semua function bisa dipakai di file lain.
export default{
    readCartMethod,
    findCartMethod,
    addCartMethod,
    editCartMethod,
    createCartItems
}