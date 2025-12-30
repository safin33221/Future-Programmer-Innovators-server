import express, { Router } from 'express';
import { userController } from './user.controller';

const router = express.Router()
router.post('/registration', userController.registerAsGuest)

export const UserRoute: Router = router;