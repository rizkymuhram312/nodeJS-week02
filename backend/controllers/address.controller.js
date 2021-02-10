import { Router } from 'express';
import { sequelize } from '../models/index';

//select Address
const allAddress = async (req, res) => {
    const address = await req.context.models.address.findAll(
      {
      include: [{
          model: req.context.models.city
      }]
    }
  );
    return res.send(address);
}

//Select Address by PK
const findAddress = async (req, res) => {
    const address = await req.context.models.address.findByPk(
        req.params.addr_id,
      );
      return res.send(address);
}

//Insert Address
const addAddress = async (req,res) => {
const { addr_id, addr_email, addr_fullname, addr_phone_number, addr_is_default, addr_zipcode, addr_street1, addr_street2, add_city_id, add_user_id} = req.body;
  const address = await req.context.models.address.create({
    addr_id : addr_id,
    addr_email : addr_email,
    addr_fullname : addr_fullname,
    addr_phone_number : addr_phone_number,
    addr_is_default : addr_is_default,
    addr_zipcode : addr_zipcode,
    addr_street1 : addr_street1,
    addr_street2 : addr_street2,
    add_city_id : add_city_id,
    add_user_id : add_user_id

  });

  return res.send(address);
}

//update Address
const editAddress = async (req, res) => {
    const {addr_email, addr_fullname, addr_phone_number, addr_is_default, addr_zipcode, addr_street1, addr_street2, add_city_id, add_user_id} = req.body;
    const address =  await req.context.models.address.update({    
        addr_email : addr_email,
        addr_fullname : addr_fullname,
        addr_phone_number : addr_phone_number,
        addr_is_default : addr_is_default,
        addr_zipcode : addr_zipcode,
        addr_street1 : addr_street1,
        addr_street2 : addr_street2,
        add_city_id : add_city_id,
        add_user_id : add_user_id
     }, {
        where: { addr_id: req.params.addr_id }
          });
        return res.sendStatus(200);
  };

//delete address
const deleteAddress = async (req, res) => {
    const result = await req.context.models.address.destroy({
      where: { addr_id: req.params.addr_id },
    });
  
    return res.send(true);
  };


export default{
    allAddress,
    findAddress,
    addAddress,
    editAddress,
    deleteAddress
}