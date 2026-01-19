"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../module/auth/auth.route");
const user_route_1 = require("../module/user/user.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_route_1.AuthRoute
    },
    {
        path: '/user',
        route: user_route_1.UserRoute
    },
];
moduleRoutes.map(route => router.use(route.path, route.route));
exports.default = router;
//# sourceMappingURL=index.js.map