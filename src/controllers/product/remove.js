import { products } from '../../db-memory/products.js'

const remove = (req, res) => {
    const id = req.body.id
    const productsResult = products.filter(product => product.id !== id)
    res.json({
        success: `Produto ${id} removido com sucesso!`,
        productsResult
    })
}

export default remove