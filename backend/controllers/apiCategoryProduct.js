const createCategoryProduct = async (req,res,next) => {
    const {cate_id, cate_name, product} = req.body;
    let cateId=null;

    if (cate_id === null || cate_id === undefined){
        cateId = await req.context.models.category.create({
            cate_name : cate_name
        });
    } //if

    if(cateId.cate_id !== null){
        product.map(async (el) => {
            await req.context.models.product.create(
                {
                    prod_id: el.prod_id,
                    prod_title: el.prod_title,
                    prod_description: el.prod_description,
                    prod_stock: el.prod_stock,
                    prod_price: el.prod_price,
                    prod_manufacture: el.prod_manufacture,
                    prod_image: el.prod_image,
                    prod_cate_id: cateId.cate_id
                  }
            );
        }); //map
    } //if2

    next();
} //fungsi create

export default{
    createCategoryProduct
}