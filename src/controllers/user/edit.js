import userModel from '../../models/usermodel.js'

const edit = (req, res) => {
    const newUser = req.body
    const dataValidate = userModel.validateEdit(newUser)
    if (!dataValidate.success){
        return res.status(400).json({
            error: "Dados Inválidos",
            fields: dataValidate.error.flatten().fieldsErrors
        })
    }
    const usersResult = userModel.edit(newUser)

    res.json({
        success: `Usuários ${newUser.id} atualizado com sucesso!`,
        usersResult
    })
}

export default edit