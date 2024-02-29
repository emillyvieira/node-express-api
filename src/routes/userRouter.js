import express from 'express'
import logger from '../middlewares/logger.js'
import listAll from '../controllers/user/listAll.js'
import create from '../controllers/user/create.js'
import remove from '../controllers/user/remove.js'
import edit from '../controllers/user/edit.js'

const router = express.Router()

router.use(express.json())
router.use('/user', logger)

router.get('/', (req, res) => {
    res.json({ message: "Bem vindo a API!" })
})

router.get('/', listAll)
router.post('/', create)
router.delete('/', remove)
router.put('/', edit)

export default router