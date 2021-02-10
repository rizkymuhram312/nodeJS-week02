// put your business logic using method sequalize

const findProductMethod = async (req, res) => {
  const product = await req.context.models.product.findByPk(req.params.prod_id);
  return res.send(product);
};

const readProductMethod = async (req, res) => {
  const product = await req.context.models.product.findAll();
  return res.send(product);
};

const addProductMethod = async (req, res) => {
  const {
    prod_id,
    prod_title,
    prod_description,
    prod_stock,
    prod_price,
    prod_manufacture,
    prod_image,
    prod_cate_id,
  } = req.body;
  const product = await req.context.models.product.create({
    prod_id: prod_id,
    prod_title: prod_title,
    prod_description: prod_description,
    prod_stock: prod_stock,
    prod_price: prod_price,
    prod_manufacture: prod_manufacture,
    prod_image: prod_image,
    prod_cate_id: prod_cate_id,
  })
  return res.send(product);
}

const editProductMethod = async (req, res) => {
  const {
    prod_title,
    prod_description,
    prod_stock,
    prod_price,
    prod_manufacture,
    prod_image,
    prod_cate_id,
  } = req.body;
  const product = await req.context.models.product.update(
    {
      prod_title: prod_title,
      prod_description: prod_description,
      prod_stock: prod_stock,
      prod_price: prod_price,
      prod_manufacture: prod_manufacture,
      prod_image: prod_image,
      prod_cate_id: prod_cate_id, // nama attribute yg akan di update
    },{ 
        where: { prod_id: req.params.prod_id } }
  )
  return res.sendStatus(200);
}

const deleteProductMethod = async (req, res) => {
  const result = await req.context.models.product.destroy({
    where: { prod_id: req.params.prod_id },
  });

  return res.send(true);
};

//show product with images
const findProductWImage = async (req,res) => {
  const productWImage = await req.context.models.product.findAll({
    include:[{
      model : req.context.models.productImage
    }]
  })
  return res.send(productWImage)
}

// Gunakan export default agar semua function bisa dipakai di file lain.
export default {
  findProductMethod,
  readProductMethod,
  addProductMethod,
  editProductMethod,
  deleteProductMethod,
  findProductWImage,
};
