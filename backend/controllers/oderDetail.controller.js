//Saran Pak Dian :
//Untuk fungsi ini di pindahkan dan disatukan dengan cart.controller
//tambahin sum price juga

const addProductToOrderDetail = async (req,res,next) =>{
    console.log("Landed");
    const itemsArr = req.body.items
    itemsArr.map((x) => {
        const productAdded = req.context.models.orderDetail.create({
            'ordi_quantity':x.qty,
            'ordi_price':x.price,
            'ordi_cart_id':req.body.cart_id,
            'ordi_prod_id':x.prod_id,
            'ordi_order_name':"ORD-22062016-1"
        })
        return productAdded;
    })
    res.sendStatus(201)
}

export default {addProductToOrderDetail}