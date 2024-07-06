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
exports.userLogin = void 0;
const user_1 = require("../../models/user");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const credentails_1 = __importDefault(require("../../common/credentails"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function userLogin(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const isUserExist = yield user_1.User.findOne({
                where: {
                    email: data.email
                }
            });
            if (!isUserExist) {
                return "User Not exist";
            }
            if (isUserExist) {
                const isPasswordMatch = yield bcryptjs_1.default.compare(data.password, isUserExist.password);
                if (isPasswordMatch) {
                    const token = jsonwebtoken_1.default.sign({ id: isUserExist.id, username: isUserExist.username, email: isUserExist.email, isAdmin: isUserExist.isAdmin }, credentails_1.default.jwt.SECRET_KEY);
                    if (token) {
                        return token;
                    }
                    else {
                        return "token is not genrated";
                    }
                }
            }
        }
        catch (error) {
            console.log('Error login  user account');
            return `Error login  user account:- ${error}`;
        }
    });
}
exports.userLogin = userLogin;
//# sourceMappingURL=LoginUser.js.map