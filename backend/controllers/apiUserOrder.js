const bcrypt = require('bcrypt');
const saltRounds = 10;

const createUserOrder = async (req,res,next) =>{
    const {user_id,user_name,user_password,user_email,items} = req.body;
    let userId=null;

    // const hash = await bcrypt.genSalt(saltRounds, async (err,salt)=>{
    //     await bcrypt.hash(user_password,saltRounds, async (err,hash) => {
    //         await req.context.models.users.create({
    //             user_name:user_name,
    //             user_password:hash,
    //             user_email:user_email
    //         })
    //     }).catch((error)=>{
    //         return res.send(JSON.stringify({
    //             name : error.name,
    //             message : error.message
    //         }))
    //     });
    // })

    if (user_id === null || user_id === undefined){

        userId = await req.context.models.users.create({
                    user_name:user_name,
                    user_email:user_email,
                    user_password:user_password
                }).catch(error=>{
                    return res.send(JSON.stringify({
                        name : error.name,
                        message : error.message
                    }))
                });
        // insert into cart (cart_total,cart...)values(cart_total);
    } else {
        userId = req.body;
    }

    if (userId.user_id !== null){
        items.map(async el=>{
            await req.context.models.orders.create({
                order_name: el.order_name,
                order_create_on : el.order_create_on,
                order_is_closed : el.order_is_closed,
                order_total : el.order_total,
                order_user_id : userId.user_id
            }).catch(error=>{
                return res.send(JSON.stringify({
                    name : error.name,
                    message : error.message
                }))
            });;
        });
    }


    next();
}

export default{
    createUserOrder
}