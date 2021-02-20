// put your business logic using method sequalize
const readOrders = async (req, res) => {
    const orders = await req.context.models.orders.findAll(
        {
            include: [{
                model: req.context.models.orderDetail
            }]
          }
  );
    return res.send(orders); 
}


// //tambah data
// const addOrders = async (req, res) => {
//     const {order_name, order_created_on, order_is_closed, order_total, order_user_id} = req.body;
//     const orders = await req.context.models.orders.create({
//       order_name: order_name,
//       order_created_on : order_created_on,
//       order_is_closed : order_is_closed,
//       order_total : order_total,
//       order_user_id : order_user_id
//     });
//     return res.send(orders);
// };

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

const createOrderItems = async (req,res,next) =>{
    // const {cart_id,cart_user_id,cart_is_closed,items} = req.body;
    const {order_name, order_create_on, order_is_closed, order_total, order_user_id, items} = req.body;
    let orderId=null;

    // const total = items.reduce((sum,el) => sum + Number(el.qty));

    if (order_name === null || order_name === undefined){

         orderId = await req.context.models.orders.create({
            order_name      : "ORD-"+Date.now(),
            order_total     : null,
            order_create_on :Date.now(),
            order_is_closed :order_is_closed,
            order_user_id   :order_user_id
        }).catch((error)=>{
            return res.send(JSON.stringify({
                name : error.name,
                message : error.message
            }))
        });
        // insert into cart (cart_total,cart...)values(cart_total);
        req.body.order_name = orderId;
      }

    if (req.body.order_name !== null){
        items.map(async (el)=>{
            await req.context.models.orderDetail.create({
                ordi_prod_id    : el.prod_id,
                ordi_quantity   : el.qty,
                ordi_price      : el.price,
                ordi_cart_id    : 2,
                ordi_order_name : req.body.order_name
            });
        });
    }


    next();
}




// Gunakan export default agar semua function bisa dipakai di file lain.
export default{
    readOrders,
    createOrderItems
}