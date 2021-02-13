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


const createUsersAddress = async (req, res, next) => {
    const { user_id, user_name, user_email, user_password, address } = req.body;
    let userId = null;
    if (user_id === null || user_id === undefined) {
      userId = await req.context.models.users.create({
          user_name: user_name,
          user_password: user_password,
          user_email: user_email,
        })
        .catch((error) => {
          return res.send(
            JSON.stringify({
              name: error.name,
              message: error.message,
            })
          );
        });
        req.body.user_id = userId;
    }
    if (userId.user_id !== null) {
      address.map(async (el) => {
        await req.context.models.address.create({
          addr_id: el.addr_id,
          addr_email: el.addr_email,
          addr_fullname: el.addr_fullname,
          addr_phone_number: el.addr_phone_number,
          addr_zipcode: el.addr_zipcode,
          addr_street1: el.addr_street1,
          addr_street2: el.addr_street2,
          add_city_id: el.add_city_id,
          add_user_id: userId.user_id
        });
      });
    }
    next();
  };

export default {findUser,findAllUsers,createUser,updateUser,deleteUser, createUsersAddress};