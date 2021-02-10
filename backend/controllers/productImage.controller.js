import { uuid } from 'uuidv4';
// put your business logic using method sequalize
const findProductImage = async (req,res) => {
    if (req.body.prim_id){
        const prim = await req.context.models.productImage.findByPk(
            req.body.prim_id,
          );
        return res.send(prim);
    }
    else {
        const prim = await req.context.models.productImage.findAll();
        return res.send(prim);
    }   
}
const createProductImage = async (req,res) =>{
    const { prim_file_name, prim_path, prim_prod_id} = req.body;
    const prim = await req.context.models.productImage.create({
      prim_id : uuid(),
      prim_file_name : prim_file_name,
      prim_path: prim_path,
      prim_prod_id: prim_prod_id
    });
  
    return res.send(prim);
}
const updateProductImage = async (req, res) => {
  const { prim_id, prim_file_name, prim_path, prim_prod_id } = req.body;
  const prim = await req.context.models.productImage.update(
    {
      prim_file_name: prim_file_name,
      prim_path: prim_path,
      prim_prod_id: prim_prod_id,
    },
    {
      where: {
        prim_id: prim_id
      }
    }
  );

  return res.send(200);
};
const deleteProductImage = async (req, res) => {
    const result = await req.context.models.productImage.destroy({
      where: { prim_id : req.body.prim_id },
    });
  
    return res.send(200);
  };


// Gunakan export default agar semua function bisa dipakai di file lain.
export default{
    findProductImage,
    createProductImage,
    updateProductImage,
    deleteProductImage
}