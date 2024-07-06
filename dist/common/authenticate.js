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
exports.authentication = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const credentails_1 = __importDefault(require("./credentails"));
function authentication(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const decode = yield jsonwebtoken_1.default.verify(data.token, credentails_1.default.jwt.SECRET_KEY);
            if (decode) {
                return decode;
            }
            else {
                return "Auth token does not match";
            }
        }
        catch (error) {
            console.log('Error in user authentication');
            return `Error in authenticate user:- ${error}`;
        }
    });
}
exports.authentication = authentication;
//# sourceMappingURL=authenticate.js.map