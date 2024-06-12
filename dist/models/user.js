"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const payment_1 = __importDefault(require("./payment"));
const rating_1 = __importDefault(require("./rating"));
const review_1 = __importDefault(require("./review"));
class User extends sequelize_1.Model {
    comparePassword(password) {
        throw new Error('Method not implemented.');
    }
    static findById(id) {
        throw new Error('Method not implemented.');
    }
}
User.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        unique: true
    }
}, {
    sequelize: pgConfig_1.default,
    tableName: 'user'
});
User.hasMany(review_1.default, { foreignKey: 'userId' });
User.hasMany(rating_1.default, { foreignKey: 'userId' });
User.hasMany(payment_1.default, { foreignKey: 'userId' });
exports.default = User;
//# sourceMappingURL=user.js.map