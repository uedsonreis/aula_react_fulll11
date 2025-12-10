import type { User } from "~/models"

const LOGGED_KEY = 'AUTH@LOGGED_KEY'
const URL_API = 'http://localhost:3030/auth/login'

function setLoggedUser(user: User) {
    sessionStorage.setItem(LOGGED_KEY, JSON.stringify(user))
}

export function getLoggedUser() {
    const json = sessionStorage.getItem(LOGGED_KEY)
    if (json) return JSON.parse(json) as User
    return null
}

export async function login(username: string, password: string) {
    
    const response = await fetch(URL_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify({ username, password })
    })

    if (response.ok) {
        const data = await response.json()
        if (data && data.token) {
            setLoggedUser(data)
            return true
        }
    }
    return false
}
