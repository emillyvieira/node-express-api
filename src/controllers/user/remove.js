import userModel from '../../models/usermodel.js'

const remove = (req, res) => {
    const id = req.body.id
    const dataValidated = userModel.validateId(id)
	if(!dataValidated.success){
		return res.status(400).json({
			error: "Dados Inválidos!",
			fields: dataValidated.error.flatten().fieldErrors
		})
	}
    const usersResult = 
    res.json({
        success: `Usuários ${id} removido com sucesso!`,
        usersResult
    })
}

export default remove