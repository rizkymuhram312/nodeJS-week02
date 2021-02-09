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
app.get("/api/v1/user_roles", (req,res)=>{
    pool.query(
        "select user_id, role_id from user_roles",
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
app.post("/api/v1/user_roles",(req,res)=>{
    const {user_id,role_id} = req.body;
    pool.query(
        "insert into user_roles (user_id,role_id) values ($1,$2)",
        [user_id,role_id],
        (error,results)=>{
            if(error){
                throw error;
            }
            res.sendStatus(201);
        }

    )
});

//update tanpa memakai param yg dimana semua attr dikikirm dri body
app.put("/api/v1/user_roles/",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {user_id,role_id} = req.body;
    pool.query(
        "update user_roles set role_id = $1 where user_id=$2",
        [role_id,user_id],
        (error,results)=>{
            if(error){
                throw error;
            }
            res.sendStatus(200);
        }

    )
});

//delete
app.delete("/api/v1/user_roles/:id",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {id} = req.params;
    pool.query(
        "delete from user_roles where user_id=$1",
        [id],
        (error,results)=>{
            if(error){
                throw error;
            }
            res.sendStatus(200);
        }

    )
});

app.get("/api/v1/user_roles/:id",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {id} = req.params;
    
    pool.query(
        "select user_id, role_id from user_roles where user_id=$1",
        [id],
        (error,results)=>{
            if(error){
                throw error;
            }
            res.status(200).json(results.rows);
        }

    )
});