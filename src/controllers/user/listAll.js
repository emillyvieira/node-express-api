import userModel from "../../models/usermodel.js"

const listAll = (req, res) => {
	res.json({
		success: "Usuários listados com sucesso!",
		users: userModel.list()
	})
}

export default listAll