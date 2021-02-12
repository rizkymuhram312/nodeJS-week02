import orderDetail from "../models/orderDetail.model";

const readOrderDetailMethod = async(req,res) =>{
    const orderDetail = await req.context.models.orderDetail.findAll();
    return res.send(orderDetail);
}
export default{
    readOrderDetailMethod
} ;