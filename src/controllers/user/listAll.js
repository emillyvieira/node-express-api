import {list} from '../models/userModel.js'

const listAll = (req, res) => {
    res.json({
        success: "Usuários listados com sucesso!",
        users
    })
}

export default listAll