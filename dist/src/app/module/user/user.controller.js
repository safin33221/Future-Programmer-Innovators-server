"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const catchAsync_1 = __importDefault(require("../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../shared/sendResponse"));
const statusCode_1 = require("../../shared/statusCode");
const user_service_1 = require("./user.service");
const pick_1 = __importDefault(require("../../helper/pick"));
const user_constant_1 = require("./user.constant");
/* =========================
   Register User
========================= */
const registerAsGuest = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_service_1.UserService.registerAsGuest(req.body);
    (0, sendResponse_1.default)(res, {
        status: statusCode_1.statusCode.OK,
        success: true,
        message: "registration successful",
        data: result
    });
}));
/* =========================
   Get All Users
========================= */
const getAllUsers = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, user_constant_1.userFilterableFields); // searching , filtering
    const options = (0, pick_1.default)(req.query, ["page", "limit", "sortBy", "sortOrder"]);
    const result = yield user_service_1.UserService.getAllUsers(filters, options);
    (0, sendResponse_1.default)(res, {
        status: statusCode_1.statusCode.OK,
        success: true,
        message: "users retrieved successfully",
        data: result,
    });
}));
const getMe = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.user);
    const email = req.user.email;
    const result = yield user_service_1.UserService.getMe(email);
    (0, sendResponse_1.default)(res, {
        status: statusCode_1.statusCode.OK,
        success: true,
        message: "profile retrieved successfully",
        data: result,
    });
}));
const SoftDelete = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield user_service_1.UserService.SoftDelete(id);
    (0, sendResponse_1.default)(res, {
        status: statusCode_1.statusCode.OK,
        success: true,
        message: "User Deleted Successful",
        data: result,
    });
}));
exports.userController = {
    registerAsGuest,
    getAllUsers,
    getMe,
    SoftDelete
};
//# sourceMappingURL=user.controller.js.map