const allAddress = async (req, res) => {
    const address = await req.context.models.address.findAll();
    return res.send(address);
}

export default{
    allAddress
}