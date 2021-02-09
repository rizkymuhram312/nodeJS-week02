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
    database : "batch7"

});

const app = express();

app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());

const port = process.env.PORT || 1337;

app.listen(port, () => console.log(`Server listening on port ${port}`));

// query table regions
app.get("/api/v1/regions", (req,res)=>{
    pool.query(
        "select region_id, region_name from regions",
        [],
        (error, result)=>{
            if(error){
                throw error;
            }
            res.status(200).json(result.rows); //200 menandakan sukses, 400 error
        }
    )
});

//insert
app.post("/api/v1/regions",(req,res)=>{
    const {region_name} = req.body;
    pool.query(
        "insert into regions (region_name) values ($1)",
        [region_name],
        (error,results)=>{
            if(error){
                throw error;
            }
            res.sendStatus(201);
        }

    )
});

// {
// 	"region_name" : "Antarkitaa"
// }

//update
app.put("/api/v1/regions/:id",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {id} = req.params;
    const {region_name} = req.body;
    pool.query(
        "update regions set region_name = $1 where region_id=$2",
        [region_name,id],
        (error,results)=>{
            if(error){
                throw error;
            }
            res.sendStatus(200);
        }

    )
});
// {
// 	"region_name" : "Antarkitaa"
// }

//query by filter
app.get("/api/v1/regions/:id",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {id} = req.params;
    
    pool.query(
        "select region_id, region_name from regions where region_id=$1",
        [id],
        (error,results)=>{
            if(error){
                throw error;
            }
            res.status(200).json(results.rows);
        }

    )
});

//delete
app.delete("/api/v1/regions/:id",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {id} = req.params;
    pool.query(
        "delete from regions where region_id=$1",
        [id],
        (error,results)=>{
            if(error){
                throw error;
            }
            res.sendStatus(200);
        }

    )
});
//update tanpa memakai param yg dimana semua attr dikikirm dri body
app.put("/api/v1/regions/",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {region_id,region_name} = req.body;
    pool.query(
        "update regions set region_name = $1 where region_id=$2",
        [region_name,region_id],
        (error,results)=>{
            if(error){
                throw error;
            }
            res.sendStatus(200);
        }

    )
});

 //{
// 	"region_id":8,
// 	"region_name":"Antertica"

// }