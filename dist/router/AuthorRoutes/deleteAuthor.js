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
exports.deleteAuthorRoute = void 0;
const express_1 = require("express");
const deleteAuthor_1 = require("../../controller/authorController/deleteAuthor");
const deleteAuthorRoute = (0, express_1.Router)();
exports.deleteAuthorRoute = deleteAuthorRoute;
deleteAuthorRoute.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const update = yield (0, deleteAuthor_1.authorDelete)(req, res, id);
        return update;
    }
    catch (error) {
        res.status(500).send('Error in deleteing author' + error);
    }
}));
//# sourceMappingURL=deleteAuthor.js.map