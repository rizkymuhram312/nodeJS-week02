import {Router } from 'express';
import { now } from 'sequelize/types/lib/utils';
import models, {sequelize} from '../models/index';

const readCartMethod = async (req,res) => {
    const cart = await req.context.models.cart.findAll(
        {
            include:items [{
                model: req.context.models.orderDetail
            }]
          }
    );
    return res.send(cart);
};



export default {
    readCartMethod
};