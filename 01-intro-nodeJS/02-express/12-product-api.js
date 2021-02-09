const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
//create pool for pg DB
const Pool = require("pg").Pool;


const pool = new Pool({
    user : "postgres",
    password : "root",
    host : "localhost",
    port : "5432",
    database : "ecomm"

});

const app = express();

app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());

const port = process.env.PORT || 1337;

app.listen(port, () => console.log(`Server listening on port ${port}`));

// query table regions
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

//input
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