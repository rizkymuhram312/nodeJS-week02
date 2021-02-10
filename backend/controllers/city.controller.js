// put your business logic using method sequalize
const readCityMethod = async (req, res) => {
    const city = await req.context.models.city.findAll();
    return res.send(city); 
}

//filter pencarian data
const findCityMethod = async (req, res) => {
    const city = await req.context.models.city.findByPk(
      req.params.cityId,
    );
    return res.send(city);
};


//tambah data
const addCityMethod = async (req, res) => {
    const {city_name, city_prov_id} = req.body;
    const city = await req.context.models.city.create({
      city_name: city_name,
      city_prov_id : city_prov_id,
    });
    return res.send(city);
};



//ubah data
// Change everyone without a last name to "Doe"
const editCityMethod = async (req, res) => {
    const {city_name, city_prov_id} = req.body;
    const city =  await req.context.models.city.update({    
        city_name: city_name,
        city_prov_id : city_prov_id
     }, {
        where: { city_id: req.params.cityId }
          });
        return res.sendStatus(200);
  };

//hapus data
const deleteCityMethod = async (req, res) => {
    const result = await req.context.models.city.destroy({
      where: { city_id: req.params.cityId },
    });
  
    return res.send(true);
  };


  
// Gunakan export default agar semua function bisa dipakai di file lain.
export default{
    readCityMethod,
    findCityMethod,
    addCityMethod,
    deleteCityMethod,
    editCityMethod
}