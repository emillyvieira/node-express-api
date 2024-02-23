import express from 'express'
// import logger from '../middlewares/logger.js'
import {products} from '../db-memory/products.js'

const router = express.Router()

// router.use('/products', logger)

router.get('/', (req, res) => {
    res.json({
        success: "Produto listados com sucesso!",
        products
    })
})

router.post('/', (req, res) => {
    const product = req.body
    product.id = products[products.length - 1].id + 1
    products.push(product)
    res.json({
        success: "Produto adicionado com sucesso!",
        products
    })
})


router.delete('/', (req, res) => {
    const id = req.body.id
    const productsResult = products.filter(product => product.id !== id)
    res.json({
        success: `Produto ${id} removido com sucesso!`,
        productsResult
    })
})

router.put('/', (req, res) => {
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
})

export default router