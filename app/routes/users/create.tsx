import MyInput from "~/components/my-input"

import * as userService from '../../services/user.service'
import { useNavigate } from "react-router"

export default function CreateUserPage() {

    const navigate = useNavigate()

    let name = ''
    let username = ''
    let password = ''
    let confirmPass = ''

    function save() {
        if (!name || name.trim().length < 1) {
            alert('Nome é obrigatório')
            return
        }
        if (!username || username.trim().length < 1) {
            alert('Login é obrigatório')
            return
        }
        if (!password || username.trim().length < 1) {
            alert('Senha é obrigatória')
            return
        }
        if (password !== confirmPass) {
            alert('As senhas não coincidem')
            return
        }

        userService.create({ name, username, password }).then(() => {
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
                <h1>Novo Usuário</h1>
            </header>
            <main>
                <MyInput label="Nome" onChange={event => name = event.target.value} />
                <MyInput label="Login" onChange={event => username = event.target.value} />
                <MyInput label="Senha" onChange={event => password = event.target.value} type='password' />
                <MyInput
                    label="Confirmar Senha" type='password'
                    onChange={event => confirmPass = event.target.value}
                />
            </main>
            <footer>
                <button onClick={save}>Salvar</button>
            </footer>
        </div>
    )
}