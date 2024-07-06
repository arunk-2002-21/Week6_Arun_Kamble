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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrder = void 0;
const book_1 = require("../../models/book");
const payment_1 = require("../../models/payment");
const authenticate_1 = require("../../common/authenticate");
const uuid_1 = require("uuid");
function getOrder(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const islogin = yield (0, authenticate_1.authentication)(data);
            if (islogin) {
                const isAdmin = yield islogin.isAdmin;
                // to do to make it false
                if (isAdmin) {
                    const bookDeatils = yield book_1.Book.findByPk(data.bookId);
                    const newOrder = yield payment_1.Payment.create({
                        id: (0, uuid_1.v4)(),
                        userId: islogin.id,
                        bookId: data.bookId,
                        amount: bookDeatils.price,
                        status: "Pending"
                    });
                    return newOrder;
                }
                else {
                    return "Error during placing order";
                }
            }
        }
        catch (error) {
            return `Error in placing order:- ${error}`;
        }
    });
}
exports.getOrder = getOrder;
//# sourceMappingURL=order.js.map