"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const auth_1 = require("../../middleware/auth");
const enums_1 = require("../../../../prisma/generated/prisma/enums");
const router = express_1.default.Router();
router.get('/', (0, auth_1.auth)(enums_1.UserRole.ADMIN), user_controller_1.userController.getAllUsers);
router.get("/me", (0, auth_1.auth)(), user_controller_1.userController.getMe);
router.post('/registration', user_controller_1.userController.registerAsGuest);
router.patch('/soft-delete/:id', (0, auth_1.auth)(enums_1.UserRole.ADMIN), user_controller_1.userController.SoftDelete);
exports.UserRoute = router;
//# sourceMappingURL=user.route.js.map