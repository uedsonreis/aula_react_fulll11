import MyInput from "~/components/my-input"

import * as authService from '../services/auth.service'

export default function LoginPage() {

    let username = ''
    let password = ''

    function signIn() {
        authService.login(username, password).then(isLoggedIn => {
            if (isLoggedIn) {
                alert('Login bem-sucedido!')
            } else {
                alert('Login/senha inválido(a)!')
            }
        })
    }

    return (
        <div className="login-page">
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
