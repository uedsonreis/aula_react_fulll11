import { type RouteConfig, index, route } from "@react-router/dev/routes"

export default [
    index("routes/login.tsx"),
    route('users', 'routes/users/list.tsx'),
    route('users/create', 'routes/users/create.tsx'),
    route('users/:id', 'routes/users/update.tsx')
] satisfies RouteConfig
