import type { User } from "~/models"
import { getLoggedUser } from "./auth.service"

const URL_API = 'http://localhost:3030/users'

function getHeaders() {
    const loggedUser = getLoggedUser()
    if (!loggedUser || !loggedUser.token) {
        throw new Error('401')
    }
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${loggedUser.token}`
    }
}

export async function create(user: User) {
    const response = await fetch(URL_API, {
        method: 'POST', headers: getHeaders(),
        body: JSON.stringify(user)
    })

    if (!response.ok) {
        throw new Error(response.status.toString())
    }
}

export async function getList() {
    const response = await fetch(URL_API, {
        method: 'GET', headers: getHeaders()
    })

    if (response.ok) {
        return await response.json() as User[]
    } else {
        throw new Error(response.status.toString())
    }
}

export async function remove(id: number) {
    const response = await fetch(`${URL_API}/${id}`, {
        method: 'DELETE', headers: getHeaders()
    })

    if (!response.ok) {
        throw new Error(response.status.toString())
    }
}
