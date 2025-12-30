import express, { Router } from "express";
import { authController } from "./auth.controller";

const router = express.Router()
//login
router.post('/login', authController.login)

export const AuthRoute: Router = router;