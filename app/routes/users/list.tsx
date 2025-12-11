import React from "react"
import { Link, useNavigate } from "react-router"

import type { User } from "~/models"
import * as userService from '../../services/user.service'

export default function UserPage() {

    const navigate = useNavigate()

    const [users, setUsers] = React.useState<User[]>([])

    React.useEffect(() => {

        userService.getList().then(data => {
            console.log('Data Response: ', data)
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
                <Link to="create">Adicionar Usuário</Link>
                
                {
                    users.map(user => (
                        <div>
                            {user.id} - {user.name} ({user.username})
                        </div>
                    ))
                }
            </main>

            <footer>
                Temos {users.length} usuário(s) cadastrado(s).
            </footer>
        </div>
    )
}