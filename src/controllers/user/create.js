import userModel from '../../models/usermodel.js'

const create = (req, res) => {
    const user = req.body
    const dataValidate = userModel.validateCreate(user)
    if (!dataValidate.success){
        return res.status(400).json({
            error: "Dados Inválidos",
            fields: dataValidate.error.flatten().fieldsErrors
        })
    }
    const result = userModel.create(dataValidate)
    res.json({
        success: "Usuários adicionado com sucesso!",
        users: result
    })
}

export default create