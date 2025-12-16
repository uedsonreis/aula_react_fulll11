import React from "react"
import { Link, useNavigate } from "react-router"

import type { User } from "~/models"
import ListItem from "~/components/list-item"
import * as userService from '../../services/user.service'

export default function UserPage() {

    const navigate = useNavigate()

    const [users, setUsers] = React.useState<User[]>([])

    function fetchUsers() {
        userService.getList().then(data => {
            setUsers(data)
        }).catch(error => {
            navigate('/')
        })
    }

    React.useEffect(() => {
        fetchUsers()
    }, [])

    function goToUpdatePage(id: number) {
        navigate(`/users/${id}`)
    }

    function removeUser(id: number) {
        userService.remove(id).then(() => {
            fetchUsers()
        }).catch(error => {
            navigate('/')
        })
    }

    return (
        <div className="container">
            <header>
                <h1>Listagem de Usuários</h1>
            </header>
            
            <main>
                <Link to="create">Adicionar Usuário</Link>
                {
                    users.map(user => (
                        <ListItem
                            key={user.username}
                            title={user.name} description={user.username}
                            update={() => goToUpdatePage(user.id!)}
                            remove={() => removeUser(user.id!)}
                        />
                    ))
                }
            </main>

            <footer>
                Temos {users.length} usuário(s) cadastrado(s).
            </footer>
        </div>
    )
}