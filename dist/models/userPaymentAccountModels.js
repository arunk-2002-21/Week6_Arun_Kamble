"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const contract_1 = require("./contract");
const address_1 = require("./address");
const bankAccountDetails_1 = require("./bankAccountDetails");
class Account extends sequelize_1.Model {
}
exports.Account = Account;
Account.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    userId: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    bankDetailsUId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'Bank_Details',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    addressUId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'Addresses',
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: 'Accounts',
});
Account.hasMany(contract_1.Contract, { foreignKey: 'accountUId' });
contract_1.Contract.belongsTo(Account, { foreignKey: 'accountUId' });
Account.belongsTo(address_1.Address, { foreignKey: 'addressUId' });
Account.belongsTo(bankAccountDetails_1.BankDetails, { foreignKey: 'bankDetailsUId' });
//# sourceMappingURL=userPaymentAccountModels.js.map