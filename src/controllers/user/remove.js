import usermodel from "../../models/usermodel.js"

const remove = (req, res) => {
    const id = req.body.id
    const usersResult = 
    res.json({
        success: `Usuários ${id} removido com sucesso!`,
        users: usersResult
    })
}

export default remove