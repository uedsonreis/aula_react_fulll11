import MyInput from "~/components/my-input";

export default function LoginPage() {

    function signIn() {
        alert('Entrando...')
    }

    function handleLogin(event: React.ChangeEvent<HTMLInputElement>) {
        console.log('Login:', event.target.value);
    }

    return (
        <div className="login-page">
            <header>
                <h1>Página de Login</h1>
            </header>
            <main>
                <MyInput label="Login" onChange={handleLogin} />
                <MyInput label="Senha" type='password' />
            </main>
            <footer>
                <button onClick={signIn}>Entrar</button>
            </footer>
        </div>
    );
}
