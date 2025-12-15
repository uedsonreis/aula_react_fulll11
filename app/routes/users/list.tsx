import React from "react"
import { Link, useNavigate } from "react-router"

import type { User } from "~/models"
import ListItem from "~/components/list-item"
import * as userService from '../../services/user.service'

export default function UserPage() {

    const navigate = useNavigate()

    const [users, setUsers] = React.useState<User[]>([])

    React.useEffect(() => {

        userService.getList().then(data => {
            setUsers(data)
        }).catch(error => {
            navigate('/')
        })

    }, [])

    return (
        <div className="container">
            <header>
                <h1>Listagem de Usuários</h1>
            </header>
            
            <main>
                <Link className="link" to="create">Adicionar Usuário</Link>
                {
                    users.map(user => <ListItem title={user.name} description={user.username} />)
                }
            </main>

            <footer>
                Temos {users.length} usuário(s) cadastrado(s).
            </footer>
        </div>
    )
}