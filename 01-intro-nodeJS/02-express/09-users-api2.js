// query table regions
exports.viewUsers = function(app,pool){
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
}

//input
exports.insertUsers = function(app,pool){
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
}

//update tanpa memakai param yg dimana semua attr dikikirm dri body
exports.updateUsers = function(app,pool){
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
}

//delete
exports.deleteUsers = function(app,pool){
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
}

//query by filter
exports.filterUsers = function(app,pool){
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
}