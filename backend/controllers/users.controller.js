import {sequelize} from '../models/index';
const bcrypt = require('bcrypt');
const saltRounds = 10;

const findAllUsers = async (req, res, next) => {
    const allUsers = await req.context.models.users.findAll({

        include: [{
            model: req.context.models.address
        }]
    }
    );
    return res.send(allUsers);
}

const findUser = async (req,res) => {
    const findUserByUserName = await req.context.models.users.findAll(
        {where:{'user_name':req.params.username}},
        {
            include: [{
                model: req.context.models.address
            }]
        })
    return res.send(findUserByUserName);
}

const createUser = async (req,res) => {
    await bcrypt.genSalt(saltRounds,async (err,salt) => {        
        await bcrypt.hash(req.body.user_name,saltRounds,async (err,hash) => {
          await req.context.models.users.create({
            'user_name': req.body.user_name,
            'user_password' : hash,
            'user_email' : req.body.user_email
            })
            res.sendStatus(200)
        })
    })
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
    await req.context.models.users.destroy({
        where : {'user_name' : req.body.user_name}
    })
    return res.sendStatus(200)
}

//try use include address
// const findUserWAddress = async (req,res) => {
//     await req.context.models.users.findAll({
//         include:[{
//             model : req.context.models.address
//         }]
//     });
//     return res.send(findUserWAddress)
// }

export default {findUser,findAllUsers,createUser,updateUser,deleteUser};