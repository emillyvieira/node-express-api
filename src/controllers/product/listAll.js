import {products} from '../../db-memory/products.js'

const listAll = (req, res) => {
    res.json({
        success: "Produto listado com sucesso!",
        products
    })
}

export default listAll