
const findUserRole = async (req, res) => {
    const userRole = await req.context.models.userRole.findAll(
        {
            include: [{
                model: req.context.models.users
            }]
        }
    );
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
        req.params.userId,{
            include: [{
                model: req.context.models.users
            }]
        }
    );
    return res.send(userRole);
};

const addUserRole = async (req,res) => {
    const {user_id, role_id} = req.body;
    const userRole = await req.context.models.userRole.create({
        user_id: user_id,
        role_id: role_id
    });
    return res.send(userRole);
};


const editUserRole = async (req,res) => {
    const {user_id, role_id} = req.body;
    const userRole = await req.context.models.userRole.update({
        user_id: user_id,
        role_id: role_id
    },
    {
        where: {user_id: user_id}
    });
    return res.sendStatus(200);
};


export default{
    findUserRole,
    deleteUserRole,
    findIdUserRole,
    addUserRole,
    editUserRole
}