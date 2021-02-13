import {Router} from 'express';
import cateCtrl from '../controllers/category.controller'
import apiCateProd from '../controllers/apiCategoryProduct'

const router = Router()

router.get('/', cateCtrl.readCategoryMethod);
router.get('/:categoryId', cateCtrl.findCategoryMethod);
router.post('/', cateCtrl.addCategoryMethod);
router.delete('/:categoryId', cateCtrl.deleteCategoryMethod);
router.put('/:categoryId', cateCtrl.editCategoryMethod);
router.post('/addCateProd',apiCateProd.createCategoryProduct,cateCtrl.readCategoryMethod);

export default router;