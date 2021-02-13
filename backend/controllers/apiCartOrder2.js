import { now } from "sequelize/types/lib/utils";

const createCartItems = async (req,res,next) =>{
    const{cart_id,cart_user_id,cart_is_closed,items } = req.body; // dari requset body postman
    // console.log(""); //untuk check debug 
    let cartID = null;
    
    if (cart_id == null || cart_id == undefined){
        cartId = await req.context.models.cart.create({
            cart_total:null,
            cart_created_on:Date(now),
            cart_is_closed:cart_is_closed,
            cart_user_id:cart_user_id
        }) //cartid
        //cart_total, cart_created_on sebelh kiri titik 2 itu dri model database
    }  //if

    if(cartID.cart_id !== null){
        // items.forEach(element =>{
        //     console.log(element.prod_id); //untuk check debug
        // });
        items.map(async (el)=>{
            await req.context.models.orderDetail.create({
                ordi_prod_id : el.prod_id,
                ordi_quantity : el.qty,
                ordi_price : el.price,
                ordi_cart_id : cartID.cart_id,
                ordi_order_name : "ORD-22082016-5"
            }) //await
        }) //map
    } //if

    next();
}

export default{
    createCartItems
}