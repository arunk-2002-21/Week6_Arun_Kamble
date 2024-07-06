"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const uuid_1 = require("uuid");
const user_1 = require("./user");
const author_1 = require("./author");
const payment_1 = require("./payment");
const review_1 = require("./review");
const rating_1 = require("./rating");
class Book extends sequelize_1.Model {
}
exports.Book = Book;
Book.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        defaultValue: (0, uuid_1.v4)()
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
    publishedYear: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    authors: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: false,
    },
    externalId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: pgConfig_1.default,
    tableName: 'Books'
});
Book.hasMany(author_1.Author);
author_1.Author.hasMany(Book);
Book.belongsTo(author_1.Author);
author_1.Author.belongsTo(Book);
Book.hasMany(review_1.Review, {
    foreignKey: 'bookId'
});
review_1.Review.belongsTo(Book, {
    foreignKey: 'bookId'
});
Book.hasMany(rating_1.Rating, {
    foreignKey: 'bookId'
});
user_1.User.hasMany(review_1.Review, {
    foreignKey: 'userId'
});
review_1.Review.belongsTo(user_1.User, {
    foreignKey: 'userId'
});
user_1.User.hasMany(rating_1.Rating, {
    foreignKey: 'userId'
});
rating_1.Rating.belongsTo(user_1.User, {
    foreignKey: 'userId'
});
user_1.User.hasMany(payment_1.Payment, {
    foreignKey: 'userId'
});
payment_1.Payment.belongsTo(user_1.User, {
    foreignKey: 'userId'
});
Book.hasMany(payment_1.Payment, {
    foreignKey: 'bookId'
});
payment_1.Payment.belongsTo(Book, {
    foreignKey: 'bookId'
});
//# sourceMappingURL=book.js.map