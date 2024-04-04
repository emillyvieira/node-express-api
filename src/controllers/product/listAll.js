import productModel from "../../models/productModel.js"

const listAll = (req, res) => {
    res.json({
        success: "Produto listado com sucesso!",
        products: productModel.list()
    })
}

export default listAll