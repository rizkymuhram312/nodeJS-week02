const cartCheck = async (req,res,next) => {
    let newCart=null;
    const anyCart = req.body.cart_id
    if(anyCart !== null){
        next()
    }else{
    newCart = await req.context.models.cart.create({
            'cart_total':null,
            'cart_created_on':Date.now(),
            'cart_is_closed':false,
            'cart_user_id':12
        });

    //ini masih salah 
    req.body.cart_id = newCart
    next()
    }
}
const findAllCart = async (req,res,next) => {
    const allCart = await req.context.models.cart.findAll();
    return res.send(allCart)
}
const findAllCartWOrdi = async (req,res,next) => {
    const allCart = await req.context.models.cart.findAll({
        include :[{
            model : req.context.models.orderDetail
        }]
    });
    return res.send(allCart)
}

// const addProduct = async (req,res,next)=>{
//     console.log(req.body.items);
//     res.send("works")
// }

export default {cartCheck,findAllCart,findAllCartWOrdi};
