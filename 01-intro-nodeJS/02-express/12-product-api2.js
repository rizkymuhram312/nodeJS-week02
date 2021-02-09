// query table regions
exports.viewProduct = function(app,pool){
app.get("/api/v1/product", (req,res)=>{
    pool.query(
        "select prod_id, prod_title,prod_description,prod_stock,prod_price,prod_condition,prod_manufacture,prod_image,prod_cate_id from product",
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
exports.insertProduct = function(app,pool){
app.post("/api/v1/product",(req,res)=>{
    const {prod_title,prod_description,prod_stock,prod_price,prod_condition,prod_manufacture,prod_image,prod_cate_id} = req.body;
    pool.query(
        "insert into product (prod_title,prod_description,prod_stock,prod_price,prod_condition,prod_manufacture,prod_image,prod_cate_id) values ($1,$2,$3,$4,$5,$6,$7,$8)",
        [prod_title,prod_description,prod_stock,prod_price,prod_condition,prod_manufacture,prod_image,prod_cate_id],
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
exports.updateProduct = function(app,pool){
app.put("/api/v1/product/",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {prod_title,prod_description,prod_stock,prod_price,prod_condition,prod_manufacture,prod_image,prod_cate_id,prod_id} = req.body;
    pool.query(
        "update product set prod_title = $1,prod_description = $2,prod_stock = $3,prod_price = $4,prod_condition =$5,prod_manufacture=$6,prod_image=$7,prod_cate_id=$8 where prod_id=$9",
        [prod_title,prod_description,prod_stock,prod_price,prod_condition,prod_manufacture,prod_image,prod_cate_id,prod_id],
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
exports.deleteProduct = function(app,pool){
app.delete("/api/v1/product/:id",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {id} = req.params;
    pool.query(
        "delete from product where prod_id=$1",
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
exports.filterProduct = function(app,pool){
app.get("/api/v1/product/:id",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {id} = req.params;
    
    pool.query(
        "select prod_id, prod_title,prod_description,prod_stock,prod_price,prod_condition,prod_manufacture,prod_image,prod_cate_id from product where prod_id=$1",
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