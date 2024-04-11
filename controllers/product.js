const getAllProducts = async(req, res) => {
    res.status(200).json({msg: "I am getting AllProducts"});
}

const getAllProductsTesting = async(req, res) => {
    res.status(200).json({msg: "I am getting AllProductsTesting"});
}

module.exports = {
    getAllProducts,
    getAllProductsTesting
}