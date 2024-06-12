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
exports.deleteUser = exports.updateUser = exports.getUsers = exports.createUser = void 0;
const user_1 = __importDefault(require("../models/user"));
function createUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newUser = yield user_1.default.create(user);
            if (newUser) {
                return newUser;
            }
        }
        catch (err) {
            throw err;
        }
    });
}
exports.createUser = createUser;
// Read
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield user_1.default.findAll();
        return users;
    });
}
exports.getUsers = getUsers;
// Update
function updateUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userEntity = yield user_1.default.findByPk(user.id);
            if (!userEntity) {
                return "User not found !";
            }
            yield userEntity.update(user);
            return "User updated successfully";
        }
        catch (err) {
            return `Error updating user due to ${err.message}`;
        }
    });
}
exports.updateUser = updateUser;
// Delete
function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userEntity = yield user_1.default.findByPk(id);
            if (!userEntity) {
                return "User not found !";
            }
            yield userEntity.destroy();
            return "User updated successfully";
        }
        catch (err) {
            return `Error updating user due to ${err.message}`;
        }
    });
}
exports.deleteUser = deleteUser;
//# sourceMappingURL=userService.js.map