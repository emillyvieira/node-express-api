//const express = require('express')
import express from 'express'
import { PORT, HOST } from './config.js'
import userRouter from './routes/userRouter.js'
import logger from './middlewares/logger.js'
import productsRouter from './routes/productsRouter.js'

// import qualquer from '.config.js'

const app = express()

app.use(express.json())
app.use(logger)

app.get('/', (req, res) => {
    res.json({ message: "Bem vindo a API!" })
})

app.use('/user', userRouter)

app.use('/products', productsRouter)

//run server
app.listen(PORT, () => {
    console.log(`Servidor rodando em ${HOST}:${PORT}`)
})