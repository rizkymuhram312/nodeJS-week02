import {Router} from 'express'


const router = Router()

router.get('/', async (req,res)=>{
    const category = await req.context.models.category.findAll()
    return res.send(category)
})

export default router