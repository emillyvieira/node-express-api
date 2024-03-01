import userModel from '../../models/usermodel.js'

const listAll = (req, res) => {
    res.json({
        success: "Usuários listados com sucesso!",
        users
    })
}

export default listAll