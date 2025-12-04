
export default function LoginPage() {
    return (
        <div className="login-page">
            <header>
                <h1>Página de Login</h1>
            </header>
            <main>
                <div>
                    <span>Usuário: </span>
                    <input type="text" />
                </div>
                <div>
                    <span>Senha: </span>
                    <input type="text" />
                </div>
            </main>
            <footer>
                <p>© 2025 Minha Aplicação Web - Turma Full 11</p>
            </footer>
        </div>
    );
}
