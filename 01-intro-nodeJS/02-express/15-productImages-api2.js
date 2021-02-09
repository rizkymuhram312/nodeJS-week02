// query table regions
exports.viewProductImages = function(app,pool){
app.get("/api/v1/product_images", (req,res)=>{
    pool.query(
        "select prim_id, prim_file_name,prim_path,prim_prod_id from product_images",
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
exports.insertProductImages = function(app,pool){
app.post("/api/v1/product_images",(req,res)=>{
    const {prim_file_name,prim_path,prim_prod_id} = req.body;
    pool.query(
        "insert into product_images values (gen_random_uuid(),$1,$2,$3)",
        [prim_file_name,prim_path,prim_prod_id],
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
exports.updateProductImages = function(app,pool){
app.put("/api/v1/product_images/",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {prim_file_name,prim_path,prim_prod_id,prim_id} = req.body;
    pool.query(
        "update product_images set prim_file_name = $1,prim_path = $2,prim_prod_id = $3 where prim_id=$4",
        [prim_file_name,prim_path,prim_prod_id,prim_id],
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
exports.deleteProductImages = function(app,pool){
app.delete("/api/v1/product_images/:id",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {id} = req.params;
    pool.query(
        "delete from product_images where prim_id=$1",
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

//filter
exports.filterProductImages = function(app,pool){
app.get("/api/v1/product_images/:id",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {id} = req.params;
    
    pool.query(
        "select prim_id, prim_file_name,prim_path,prim_prod_id from product_images where prim_id=$1",
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