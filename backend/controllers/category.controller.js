import { Router } from 'express';
import { sequelize } from '../models/index';

const readCategoryMethod = async (req, res) => {
    const category = await req.context.models.category.findAll(
        {
            include: [{
                model: req.context.models.product
            }]
          }
    );
    return res.send(category);
}

//filter pencarian data
const findCategoryMethod = async (req, res) => {
    const category = await req.context.models.category.findByPk(
        req.params.categoryId,
    );
    return res.send(category);
};

const addCategoryMethod = async (req, res) => {
    const { cate_name } = req.body;
    const category = await req.context.models.category.create({
        cate_name: cate_name
    });
    return res.send(category);
};

const editCategoryMethod = async (req, res) => {
    const { cate_name } = req.body;
    const category = await req.context.models.category.update({
        cate_name: cate_name
    }, {
        where: { cate_id: req.params.categoryId }
    });
    return res.sendStatus(200);
};


//hapus data
const deleteCategoryMethod = async (req, res) => {
    const result = await req.context.models.category.destroy({
        where: { cate_id: req.params.categoryId },
    });

    return res.send(true);
};


export default {
    readCategoryMethod,
    findCategoryMethod,
    addCategoryMethod,
    deleteCategoryMethod,
    editCategoryMethod
}