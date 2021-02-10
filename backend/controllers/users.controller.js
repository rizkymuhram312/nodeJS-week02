const findAllUsers = async (req, res, next) => {
    const allUsers = await req.context.models.users.findAll();
    return res.send(allUsers);
}

// const createUser = async (req,res) => {
//   const createUser = await req.context.models.users.create({
//       'user_name' : req.body.user_name,
//       'user_password' : req.body.user_pass,
//       'user_addr_id' : req.body.user_add_id
//   })
//   return createUser;
// }

const findUser = async (req,res) => {
    const findUserByUserName = await req.context.models.users.findAll({where:{'user_name':req.params.username}})
    return res.send(findUserByUserName);
}

const createUser = async (req,res) => {
    const createUser = await req.context.models.users.create({
        'user_name': req.body.user_name,
        'user_password' : req.body.user_password,
        'user_email' : req.body.user_email
    })
    return res.send(createUser)
}

const updateUser = async (req,res) => {
    const updateUser = await req.context.models.users.update({
        'user_name': req.body.user_name,
        'user_password' : req.body.user_password,
        'user_email' : req.body.user_email
    },{
    where : {
        'user_name':req.body.user_name
    }})
    return res.send(updateUser)
}

const deleteUser = async (req,res) => {
    const deleteUser = await req.context.models.users.destroy({
        where : {'user_name' : req.body.user_name}
    })
    return res.sendStatus(200)
}

export default {findUser,findAllUsers,createUser,updateUser,deleteUser};