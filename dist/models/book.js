"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const author_1 = __importDefault(require("./author"));
const payment_1 = __importDefault(require("./payment"));
const rating_1 = __importDefault(require("./rating"));
const review_1 = __importDefault(require("./review"));
class Book extends sequelize_1.Model {
    static findById(bookId) {
        throw new Error('Method not implemented.');
    }
}
Book.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    bookCode: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    pusblishedYear: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    authors: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    externalId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: pgConfig_1.default,
    tableName: 'book'
});
Book.belongsToMany(author_1.default, { through: 'BookAuthors' });
Book.hasMany(review_1.default, { foreignKey: 'bookId' });
Book.hasMany(rating_1.default, { foreignKey: 'bookId' });
Book.hasMany(payment_1.default, { foreignKey: 'bookId' });
exports.default = Book;
//# sourceMappingURL=book.js.map