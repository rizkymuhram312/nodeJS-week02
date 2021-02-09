
// query table regions
exports.viewUserRoles = function(app,pool){
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
}

//input
exports.insertUserRoles = function(app,pool){
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
}

//update tanpa memakai param yg dimana semua attr dikikirm dri body
exports.updateUserRoles = function(app,pool){
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
}

//delete
exports.deleteUserRoles =function(app,pool){
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
}

//filter
exports.filterUserRoles = function(app,pool){
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
}