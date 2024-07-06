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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.payment = exports.CreateMandate = exports.CreateMandateForContract = exports.getContracts = exports.createContract = exports.deleteAccount = exports.ModifyAccount = exports.getAccounts = exports.createAccount = exports.GetBankAccountById = exports.getAddressById = void 0;
const userPaymentAccountModels_1 = require("../../models/userPaymentAccountModels");
const address_1 = require("../../models/address");
const bankAccountDetails_1 = require("../../models/bankAccountDetails");
const contract_1 = require("../../models/contract");
const credentails_1 = __importDefault(require("../../common/credentails"));
const authenticate_1 = require("../../common/authenticate");
const book_1 = require("../../models/book");
const payment_1 = require("../../models/payment");
const constants = require('gocardless-nodejs/constants');
const gocardless = require('gocardless-nodejs');
const client = gocardless(credentails_1.default.goCardLess.TOKEN, constants.Environments.Sandbox);
function createAccount(account) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { address, bankDetails } = account, accountDetails = __rest(account, ["address", "bankDetails"]);
            const addressRecord = yield address_1.Address.create(address);
            const bankDetailsRecord = yield bankAccountDetails_1.BankDetails.create(bankDetails);
            const newAccount = yield userPaymentAccountModels_1.Account.create(Object.assign(Object.assign({}, accountDetails), { addressUId: addressRecord.id, bankDetailsUId: bankDetailsRecord.id }));
            if (newAccount) {
                return newAccount;
            }
        }
        catch (err) {
            throw err;
        }
    });
}
exports.createAccount = createAccount;
function getAccountById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const account = yield userPaymentAccountModels_1.Account.findByPk(id, {
            include: [address_1.Address, bankAccountDetails_1.BankDetails],
        });
        return account;
    });
}
;
function getAccounts() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield userPaymentAccountModels_1.Account.findAll();
        return users;
    });
}
exports.getAccounts = getAccounts;
const getAddressById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield address_1.Address.findByPk(id);
});
exports.getAddressById = getAddressById;
const GetBankAccountById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bankAccountDetails_1.BankDetails.findByPk(id);
});
exports.GetBankAccountById = GetBankAccountById;
// Update
function ModifyAccount(accountData) {
    return __awaiter(this, void 0, void 0, function* () {
        const { address, bankDetails } = accountData, accountDetails = __rest(accountData, ["address", "bankDetails"]);
        const account = yield userPaymentAccountModels_1.Account.findByPk(accountData.id);
        if (!account)
            throw new Error('Account not found');
        if (address) {
            const addressRecord = yield address_1.Address.findByPk(account.addressUId);
            if (addressRecord) {
                yield addressRecord.update(address);
            }
        }
        if (bankDetails) {
            const bankDetailsRecord = yield bankAccountDetails_1.BankDetails.findByPk(account.bankDetailsUId);
            if (bankDetailsRecord) {
                yield bankDetailsRecord.update(bankDetails);
            }
        }
        yield account.update(accountDetails);
        return account;
    });
}
exports.ModifyAccount = ModifyAccount;
// Delete
function deleteAccount(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const accountEntity = yield userPaymentAccountModels_1.Account.findByPk(id);
            if (!accountEntity) {
                return "Account not found !";
            }
            yield accountEntity.destroy();
            return "User deleted successfully";
        }
        catch (err) {
            return `Error updating user due to ${err.message}`;
        }
    });
}
exports.deleteAccount = deleteAccount;
function createContract(contract) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            delete contract.id;
            delete contract.userId;
            const addressRecord = yield contract_1.Contract.create(contract);
            if (addressRecord) {
                return addressRecord;
            }
        }
        catch (err) {
            throw err;
        }
    });
}
exports.createContract = createContract;
function getContracts() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield contract_1.Contract.findAll();
        return users;
    });
}
exports.getContracts = getContracts;
function CreateMandate() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            var contracts = yield getContracts();
            for (const contract of contracts) {
                yield CreateMandateForContract(contract);
            }
            return true;
        }
        catch (err) {
            throw err;
        }
    });
}
exports.CreateMandate = CreateMandate;
function CreateMandateForContract(contract) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Fetch all accounts and filter the one matching the contract's accountUId
            const accounts = yield getAccounts();
            const account = accounts.find(c => contract.accountUId === c.id);
            if (!account) {
                throw new Error(`Account with UId ${contract.accountUId} not found`);
            }
            // Fetch address and bank account details
            const address = yield (0, exports.getAddressById)(account.addressUId);
            const bankAccount = yield (0, exports.GetBankAccountById)(account.bankDetailsUId);
            if (!address) {
                throw new Error(`Address with UId ${account.addressUId} not found`);
            }
            if (!bankAccount) {
                throw new Error(`Bank account with UId ${account.bankDetailsUId} not found`);
            }
            // Create a customer in GoCardless
            const gclCustomer = yield client.customers.create({
                email: account.email,
                given_name: account.name,
                family_name: "Test",
                address_line1: address.line1,
                address_line2: address.line2,
                city: address.city,
                postal_code: address.postalCode,
                country_code: "GB",
                metadata: {
                    contract_id: contract.id
                }
            });
            // Use credentials from GetBankAccountById to create customer bank account
            const customerBankAccount = yield client.customerBankAccounts.create({
                account_number: bankAccount.accountNumber,
                branch_code: bankAccount.sortCode,
                account_holder_name: account.name,
                country_code: "GB",
                links: {
                    customer: gclCustomer.id
                }
            });
            // Create a mandate
            const mandate = yield client.mandates.create({
                scheme: "bacs",
                metadata: {
                    contract_id: contract.id
                },
                links: {
                    customer_bank_account: customerBankAccount.id,
                    creditor: "CR123"
                }
            });
            console.log(mandate);
            return mandate;
        }
        catch (err) {
            console.error('Error creating mandate:', err);
            throw err;
        }
    });
}
exports.CreateMandateForContract = CreateMandateForContract;
function payment(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const islogin = yield (0, authenticate_1.authentication)(data);
            if (islogin) {
                const book = yield book_1.Book.findByPk(data.bookId);
                if (book) {
                    const payment = yield client.payments.create({
                        amount: book.price,
                        currency: "GBP",
                        charge_date: data.charge_date,
                        // reference: "TEST-62RJ9HFYMSMS7",
                        metadata: {
                            contract_id: '02d9dbdf-07b1-4026-8b23-1c447cb773fb'
                        },
                        links: {
                            mandate: data.mandateId
                        }
                    });
                    if (payment) {
                        const userAllOrder = yield payment_1.Payment.update({ status: 'Initiating' }, {
                            where: {
                                userId: islogin.id,
                                bookId: data.bookId
                            }
                        });
                        console.log(userAllOrder);
                        return payment;
                    }
                    else {
                        return "Error for initiating payment for book";
                    }
                }
            }
        }
        catch (error) {
            return `Error in intiating payment ${error}`;
        }
    });
}
exports.payment = payment;
//# sourceMappingURL=merchant.js.map