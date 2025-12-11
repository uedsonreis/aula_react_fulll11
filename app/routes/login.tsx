import MyInput from "~/components/my-input"
import { useNavigate } from 'react-router'

import * as authService from '../services/auth.service'

export default function LoginPage() {

    const navigate = useNavigate()

    let username = ''
    let password = ''

    function signIn() {
        authService.login(username, password).then(isLoggedIn => {
            if (isLoggedIn) {
                navigate('users')
            } else {
                alert('Login/senha inválido(a)!')
            }
        })
    }

    return (
        <div className="container">
            <header>
                <h1>Página de Login</h1>
            </header>
            <main>
                <MyInput label="Login" onChange={event => username = event.target.value} />
                <MyInput label="Senha" onChange={event => password = event.target.value} type='password' />
            </main>
            <footer>
                <button onClick={signIn}>Entrar</button>
            </footer>
        </div>
    );
}
