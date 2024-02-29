import userModel from '../../db-memory/userModel.js'

const create = (req, res) => {
    const user = req.body
    const result = userModel.create(user)
    res.json({
        success: "Usuários adicionado com sucesso!",
        users: result
    })
}

export default create