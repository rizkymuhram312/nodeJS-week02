// query table regions
exports.viewCity = function(app,pool){
app.get("/api/v1/city", (req,res)=>{
    pool.query(
        "select city_id, city_name,prov_id from city",
        [],
        (error, result)=>{
            if(error){
                throw error;
            }
            res.status(200).json(result.rows); //200 menandakan sukses, 400 error
        }
    )
});
}

//input
exports.insertCity = function(app,pool){
app.post("/api/v1/city",(req,res)=>{
    const {city_name,prov_id} = req.body;
    pool.query(
        "insert into city (city_name,prov_id) values ($1,$2)",
        [city_name,prov_id],
        (error,results)=>{
            if(error){
                throw error;
            }
            res.sendStatus(201);
        }

    )
});
}

//update tanpa memakai param yg dimana semua attr dikikirm dri body
exports.updateCity = function(app,pook){
app.put("/api/v1/city/",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {city_id,city_name,prov_id} = req.body;
    pool.query(
        "update city set city_name = $1,prov_id = $2 where city_id=$3",
        [city_name,prov_id,city_id],
        (error,results)=>{
            if(error){
                throw error;
            }
            res.sendStatus(200);
        }

    )
});
}

//delete
exports.deleteCity = function(app,pool){
app.delete("/api/v1/city/:id",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {id} = req.params;
    pool.query(
        "delete from city where city_id=$1",
        [id],
        (error,results)=>{
            if(error){
                throw error;
            }
            res.sendStatus(200);
        }

    )
});
}

//query by filter
exports.filterCity = function(app,pool){
app.get("/api/v1/city/:id",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {id} = req.params;
    
    pool.query(
        "select city_id, city_name, prov_id from city where city_id=$1",
        [id],
        (error,results)=>{
            if(error){
                throw error;
            }
            res.status(200).json(results.rows);
        }

    )
});
}
