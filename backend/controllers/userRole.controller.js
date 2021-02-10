
const findUserRole = async (req, res) => {
    const userRole = await req.context.models.userRole.findAll();
    return res.send(userRole); 
}

const deleteUserRole = async (req,res) => {
    const userRole = await req.context.models.userRole.destroy({
        where: {user_id: req.params.userId},
    });
    return res.send(true);
};

//filter data with parameter
const findIdUserRole = async (req,res) => {
    const userRole = await req.context.models.userRole.findByPk(
        req.params.userId,
    );
    return res.send(userRole);
};


export default{
    findUserRole,
    deleteUserRole,
    findIdUserRole
}