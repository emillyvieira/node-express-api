import userModel from '../../models/usermodel.js'

const create = (req, res) => {
    const user = req.body
    const validateData = userModel.validateCreate(user)
    console.log(validateData)
    const result = userModel.create(user)
    res.json({
        success: "Usuários adicionado com sucesso!",
        users: result
    })
}

export default create