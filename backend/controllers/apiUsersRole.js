const createUsersRoles = async (req,res,next) => {
    const {user_id,user_name,user_email,user_password,items} = req.body;
    let userId = null;

    if (user_id === null || user_id === undefined) {
        
        userId = await req.context.models.users.create({
            user_name : user_name,
            user_email : user_email,
            user_password : user_password
        }).catch((error)=>{
            return res.send(JSON.stringify({
                name : error.name,
                message : error.message
            }))
        });
    }

    if (userId.user_id !== null){
        
        items.map(async (el)=>{

        })
    }
}