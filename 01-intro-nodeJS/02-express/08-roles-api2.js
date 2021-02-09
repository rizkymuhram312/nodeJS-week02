
// query table regions
exports.viewRoles = function(app,pool){
app.get("/api/v1/roles", (req,res)=>{
    pool.query(
        "select role_id, role_name from roles",
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
exports.insertRoles = function(app,pool){
app.post("/api/v1/roles",(req,res)=>{
    const {role_name} = req.body;
    pool.query(
        "insert into roles (role_name) values ($1)",
        [role_name],
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
exports.updateRoles = function(app,pool){
app.put("/api/v1/roles/",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {role_id,role_name} = req.body;
    pool.query(
        "update roles set role_name = $1 where role_id=$2",
        [role_name,role_id],
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
exports.deleteRoles = function(app,pool){
app.delete("/api/v1/roles/:id",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {id} = req.params;
    pool.query(
        "delete from roles where role_id=$1",
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
exports.filterRoles = function(app,pool){
app.get("/api/v1/roles/:id",(req,res)=>{  //http://localhost:1337/api/v1/regions/5
    const {id} = req.params;
    
    pool.query(
        "select role_id, role_name from roles where role_id=$1",
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