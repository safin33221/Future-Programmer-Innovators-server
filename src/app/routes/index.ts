import express, { Router } from 'express';
import { AuthRoute } from '../module/auth/auth.route';
import { UserRoute } from '../module/user/user.route';
const router: Router = express.Router()


const moduleRoutes = [
    {
        path: '/auth',
        route: AuthRoute
    },
    {
        path: '/user',
        route: UserRoute
    },
]

moduleRoutes.map(route => router.use(route.path, route.route))

export default router