import { products } from '../../db-memory/products.js'

const edit = (req, res) => {
    const newproduct = req.body
    const productsResult = products.map(product => {
        if (product.id === newproduct.id) {
            return {
                id: product.id,
                name: newproduct.name || product.name,
                email: newproduct.email || product.email,
                avatar: newproduct.avatar || product.avatar
            }
        }
        return product
    })

    res.json({
        success: `Produto ${newproduct.id} atualizado com sucesso!`,
        productsResult
    })
}

export default edit