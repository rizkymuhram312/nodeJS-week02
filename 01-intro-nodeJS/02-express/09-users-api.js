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
app.get("/api/v1/users", (req,res)=>{
    pool.query(
        "select user_id, user_name,user_email,user_password from users",
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
app.post("/api/v1/users",(req,res)=>{
    const {user_name,user_email,user_password} = req.body;
    pool.query(
        "insert into users (user_name,user_email,user_password) values ($1,$2,$3)",
        [user_name,user_email,user_password],
        (error,results)=>{
            if(error){
                throw error;
            }
            res.sendStatus(201);
        }

    )
});

//update tanpa memakai param yg dimana semua attr dikikirm dri body
app.put("/api/v1/users/",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {user_id,user_name,user_email,user_password} = req.body;
    pool.query(
        "update users set user_name = $1,user_email = $2,user_password = $3 where user_id=$4",
        [user_name,user_email,user_password,user_id],
        (error,results)=>{
            if(error){
                throw error;
            }
            res.sendStatus(200);
        }

    )
});

//delete
app.delete("/api/v1/users/:id",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {id} = req.params;
    pool.query(
        "delete from users where user_id=$1",
        [id],
        (error,results)=>{
            if(error){
                throw error;
            }
            res.sendStatus(200);
        }

    )
});

//query by filter
app.get("/api/v1/users/:id",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {id} = req.params;
    
    pool.query(
        "select user_id, user_name,user_email,user_password from users where user_id=$1",
        [id],
        (error,results)=>{
            if(error){
                throw error;
            }
            res.status(200).json(results.rows);
        }

    )
});