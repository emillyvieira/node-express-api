import userModel from '../../models/userModel.js'

const edit = (req, res) => {
    const newUser = req.body
    const usersResult = userModel.edit(newUser)

    res.json({
        success: `Usuários ${newUser.id} atualizado com sucesso!`,
        usersResult
    })
}

export default edit