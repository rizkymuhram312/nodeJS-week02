

const createCartItems = async (req,res,next) =>{
    const {cart_id,cart_user_id,cart_is_closed,items} = req.body;
    let cartId=null;

    const total = items.reduce((sum,el) => sum + Number(el.qty));

    if (cart_id === null || cart_id === undefined){

         cartId = await req.context.models.cart.create({
            cart_total:total,
            cart_created_on:Date.now(),
            cart_is_closed:cart_is_closed,
            cart_user_id:cart_user_id
        }).catch((error)=>{
            return res.send(JSON.stringify({
                name : error.name,
                message : error.message
            }))
        });
        // insert into cart (cart_total,cart...)values(cart_total);
    }

    if (cartId.cart_id !== null){
        items.map(async (el)=>{
            await req.context.models.orderDetail.create({
                ordi_prod_id : el.prod_id,
                ordi_quantity : el.qty,
                ordi_price : el.price,
                ordi_cart_id : cartId.cart_id,
                ordi_order_name:"ORD-22082016-4"
            });
        });
    }


    next();
}

export default{
    createCartItems
}