"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const book_1 = __importDefault(require("./book"));
const user_1 = __importDefault(require("./user"));
class Review extends sequelize_1.Model {
    static find(arg0) {
        throw new Error('Method not implemented.');
    }
    static findById(id) {
        throw new Error('Method not implemented.');
    }
}
Review.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    userId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    bookId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        unique: true
    }
}, {
    sequelize: pgConfig_1.default,
    tableName: 'review'
});
Review.belongsTo(user_1.default, { foreignKey: 'userId' });
Review.belongsTo(book_1.default, { foreignKey: 'bookId' });
exports.default = Review;
//# sourceMappingURL=review.js.map