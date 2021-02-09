
// query table regions
exports.viewCategory = function(app,pool){
app.get("/api/v1/category", (req,res)=>{
    pool.query(
        "select cate_id, cate_name from category",
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
exports.insertCategory = function(app,pool){
app.post("/api/v1/category",(req,res)=>{
    const {cate_name} = req.body;
    pool.query(
        "insert into category (cate_name) values ($1)",
        [cate_name],
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
exports.updateCategory = function(app,pool){
app.put("/api/v1/category/",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {cate_id,cate_name} = req.body;
    pool.query(
        "update category set cate_name = $1 where cate_id=$2",
        [cate_name,cate_id],
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
exports.deleteCategory = function(app,pool){
app.delete("/api/v1/category/:id",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {id} = req.params;
    pool.query(
        "delete from category where cate_id=$1",
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
exports.filterCategory = function(app,pool){
app.get("/api/v1/category/:id",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {id} = req.params;
    
    pool.query(
        "select cate_id, cate_name from category where cate_id=$1",
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