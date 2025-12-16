import MyInput from "~/components/my-input"

import * as userService from '../../services/user.service'
import { useNavigate, useParams } from "react-router"
import React from "react"

export default function UpdateUserPage() {

    const navigate = useNavigate()
    const params = useParams()

    const userId = Number(params.id)

    const [name, setName] = React.useState('')
    const [username, setUsername] = React.useState('')

    React.useEffect(() => {
        userService.get(userId).then(user => {
            setName(user.name)
            setUsername(user.username)
        }).catch(error => {
            navigate('/')
        })
    }, [])

    function save() {
        if (!name || name.trim().length < 1) {
            alert('Nome é obrigatório')
            return
        }

        userService.update({ id: userId, name, username }).then(() => {
            navigate(-1)
        }).catch(error => {
            if (error.message === '400') {
                alert('Login já existe')
            } else if (error.message === '401') {
                navigate('/')
            } else {
                console.error(error)
            }
        })
    }

    return (
        <div className="container">
            <header>
                <h1>Editar Usuário</h1>
            </header>
            <main>
                <MyInput
                    label="Login" value={username} readOnly
                    onChange={event => setUsername(event.target.value)}
                />
                <MyInput
                    label="Nome" value={name}
                    onChange={event => setName(event.target.value)}
                />
            </main>
            <footer>
                <button onClick={save}>Salvar</button>
            </footer>
        </div>
    )
}