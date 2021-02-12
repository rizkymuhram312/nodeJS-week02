
// // put your business logic using method sequalize
// const findCart = async (req,res) => {
//     if (req.body.cart_id){
//         const cartId = await req.context.models.cart.findByPk(
//             req.body.cart_id,
//           );
//         return res.send(cartId);
//     }
//     else {
//         const cartId = await req.context.models.cart.findAll();
//         return res.send(cartId);
//     }   
// }
// const createCart = async (req,res) =>{
//     const { cart_created_on, cart_is_closed, cart_total, cart_user_id} = req.body;
//     const cart = await req.context.models.cart.create({
//         cart_created_on : cart_created_on,
//         cart_is_closed : cart_is_closed,
//         cart_total : cart_total,
//         cart_user_id : cart_user_id
//     });
//     return res.send(cart);
// }



// const updateCart = async (req, res) => {
//   const { cart_created_on, cart_is_closed, cart_total, cart_user_id } = req.body;
//   const prim = await req.context.models.productImage.update(
//     {
//         cart_created_on : cart_created_on,
//         cart_is_closed : cart_is_closed,
//         cart_total : cart_total,
//         cart_user_id : cart_user_id
//     },
//     {
//       where: {
//         cart_id: cart_id
//       }
//     }
//   );
//   return res.send(200);
// };
// const deleteProductImage = async (req, res) => {
//     const result = await req.context.models.productImage.destroy({
//       where: { prim_id : req.body.prim_id },
//     });
  
//     return res.send(200);
//   };

const createCartItem = async(req,res,next) =>{
    const {cart_id,cart_user_id,cart_is_closed,Items} = req.body;
    let cartId = null;
    if (cart_id ===null || cart_id === undefined) {
        cartId = await req.context.models.cart.create({
            cart_total : null,
            cart_created_on : Date.now(),
            cart_is_closed : cart_is_closed,
            cart_user_id : cart_user_id
        });
    }

    if (cartId.cart_id !== null) {
        Items.map(async (el)=>{
            await req.context.models.orderDetail.create({
                ordi_prod_id : el.prod_id,
                ordiquantity : el.qty,
                ordi_price : el.price,
                ordi_cart_id : cartId.cartId,
                ordi_order_name : "ORD-22082016-5"
            })
        });
    }

    return null;
}

// Gunakan export default agar semua function bisa dipakai di file lain.
export default{
    // findCart,
    // createCart,
    // updateCart
    // deleteProductImage
    createCartItem
}