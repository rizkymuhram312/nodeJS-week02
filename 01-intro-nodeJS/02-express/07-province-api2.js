
// query table regions
exports.viewProvince = function(app,pool){
app.get("/api/v1/province", (req,res)=>{
    pool.query(
        "select prov_id, prov_name from province",
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

//insert
exports.insertProvince = function(app,pool){
app.post("/api/v1/province",(req,res)=>{
    const {prov_name} = req.body;
    pool.query(
        "insert into province (prov_name) values ($1)",
        [prov_name],
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
exports.updateProvince = function(app,pool){
app.put("/api/v1/province/",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {prov_id,prov_name} = req.body;
    pool.query(
        "update province set prov_name = $1 where prov_id=$2",
        [prov_name,prov_id],
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
exports.deleteProvince = function(app,pool){
app.delete("/api/v1/province/:id",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {id} = req.params;
    pool.query(
        "delete from province where prov_id=$1",
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
exports.filterProvince = function(app,pool){
app.get("/api/v1/province/:id",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {id} = req.params;
    
    pool.query(
        "select prov_id, prov_name from province where prov_id=$1",
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