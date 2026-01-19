import express, { Router } from 'express';
import { userController } from './user.controller';
import { auth } from '../../middleware/auth';
import { UserRole } from '../../../../prisma/generated/prisma/enums';



const router = express.Router()
router.get('/', auth(UserRole.ADMIN), userController.getAllUsers)
router.get("/me", auth(), userController.getMe);

router.post('/registration', userController.registerAsGuest)
router.patch('/soft-delete/:id', auth(UserRole.ADMIN), userController.SoftDelete)

export const UserRoute: Router = router;