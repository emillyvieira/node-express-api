import { users } from '../db-memory/user.js'

const list = () => {
    return users
}

const create = (user) => {
    user.id = users[users.length - 1].id + 1
    users.push(user)
    return users
}

const edit = () => {
    return users.map(user => {
        if (user.id === newUser.id) {
            return {
                id: user.id,
                name: newUser.name || user.name,
                email: newUser.email || user.email,
                avatar: newUser.avatar || user.avatar
            } 
        }
        return user
    })
}

const remove = (id) => {
    return users.filter(user => user.id !== id)
}

export default {list, create, edit, remove}