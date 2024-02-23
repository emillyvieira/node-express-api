import express from 'express'
import logger from '../middlewares/logger.js'
import {users} from '../db-memory/user.js'


const router = express.Router()

router.use(express.json())
router.use('/user', logger)

router.get('/', (req, res) => {
    res.json({ message: "Bem vindo a API!" })
})


router.get('/', (req, res) => {
    res.json({
        success: "Usuários listados com sucesso!",
        users
    })
})

router.post('/', (req, res) => {
    const user = req.body
    user.id = users[users.length - 1].id + 1
    users.push(user)
    res.json({
        success: "Usuários adicionado com sucesso!",
        users
    })
})


router.delete('/', (req, res) => {
    const id = req.body.id
    const usersResult = users.filter(user => user.id !== id)
    res.json({
        success: `Usuários ${id} removido com sucesso!`,
        usersResult
    })
})

router.put('/', (req, res) => {
    const newUser = req.body
    const usersResult = users.map(user => {
        if (user.id === newUser.id) {
            return {
                id: user.id,
                name: newUser.name || user.name,
                email: newUser.email || user.email,
                avatar: newUser.avatar || user.avatar
            }
        }
        return user
    })

    res.json({
        success: `Usuários ${newUser.id} atualizado com sucesso!`,
        usersResult
    })
})

export default router