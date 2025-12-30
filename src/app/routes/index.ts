import express from 'express';
import { authRoute } from '../module/auth/auth.route';
const router = express.Router()


const moduleRoutes = [
    {
        path: 'auth',
        route: authRoute
    }
]

moduleRoutes.map(route => router.use(route.path, route.route))