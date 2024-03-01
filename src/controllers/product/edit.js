import productModel from "../../models/productModel.js"

const edit = (req, res) => {
    const newproduct = req.body
    const productsResult = productModel.edit()

    res.json({
        success: `Produto ${newProduct.id} atualizado com sucesso!`,
        productsResult
    })
}

export default edit