import { Account } from '../../models/userPaymentAccountModels';
import { Address } from '../../models/address';
import { BankDetails } from '../../models/bankAccountDetails';
import { Contract } from '../../models/contract';
import credentials from '../../common/credentails';
import { authentication } from '../../common/authenticate';
import { Book } from '../../models/book';
import { Payment } from '../../models/payment';


const constants = require('gocardless-nodejs/constants');
const gocardless = require('gocardless-nodejs');
const client = gocardless(credentials.goCardLess.TOKEN, constants.Environments.Sandbox)

async function createAccount(account: any): Promise<any> {
    try {
        const { address, bankDetails, ...accountDetails } = account;
        const addressRecord = await Address.create(address);
        const bankDetailsRecord = await BankDetails.create(bankDetails);

        const newAccount = await Account.create({
            ...accountDetails,
            addressUId: addressRecord.id,
            bankDetailsUId: bankDetailsRecord.id,
        });

        if (newAccount) {
            return newAccount;
        }
    } catch (err: any) {
        throw err
    }

}

async function getAccountById(id: string) {
    const account = await Account.findByPk(id, {
        include: [Address, BankDetails],
    });
    return account;
};


async function getAccounts(): Promise<any[]> {
    const users = await Account.findAll();
    return users;
}

export const getAddressById = async (id: string) => {
    return await Address.findByPk(id
    );
};

export const GetBankAccountById = async (id: string) => {
    return await BankDetails.findByPk(id
    );
};

// Update
async function ModifyAccount(accountData: any): Promise<any> {
    const { address, bankDetails, ...accountDetails } = accountData;

    const account = await Account.findByPk(accountData.id);
    if (!account) throw new Error('Account not found');

    if (address) {
        const addressRecord = await Address.findByPk(account.addressUId);
        if (addressRecord) {
            await addressRecord.update(address);
        }
    }
    if (bankDetails) {
        const bankDetailsRecord = await BankDetails.findByPk(account.bankDetailsUId);
        if (bankDetailsRecord) {
            await bankDetailsRecord.update(bankDetails);
        }
    }
    await account.update(accountDetails);

    return account;

}

// Delete
async function deleteAccount(id: string): Promise<any> {
    try {
        const accountEntity = await Account.findByPk(id);
        if (!accountEntity) {
            return "Account not found !"
        }
        await accountEntity.destroy();
        return "User deleted successfully";
    } catch (err: any) {
        return `Error updating user due to ${err.message}`;
    }

}


async function createContract(contract: any): Promise<any> {
    try {
        delete contract.id;
        delete contract.userId;

        const addressRecord = await Contract.create(contract);

        if (addressRecord) {
            return addressRecord;
        }

    } catch (err: any) {
        throw err
    }

}

async function getContracts(): Promise<any[]> {
    const users = await Contract.findAll();
    return users;
}


async function CreateMandate(): Promise<any> {
    try {

        var contracts = await getContracts();
        for (const contract of contracts) {
            await CreateMandateForContract(contract);
        }
        return true;
    }
    catch (err: any) {
        throw err;
    }
}

async function CreateMandateForContract(contract: any) {
    try {
        // Fetch all accounts and filter the one matching the contract's accountUId
        const accounts = await getAccounts();
        const account = accounts.find(c => contract.accountUId === c.id);

        if (!account) {
            throw new Error(`Account with UId ${contract.accountUId} not found`);
        }

        // Fetch address and bank account details
        const address = await getAddressById(account.addressUId);
        const bankAccount = await GetBankAccountById(account.bankDetailsUId);

        if (!address) {
            throw new Error(`Address with UId ${account.addressUId} not found`);
        }

        if (!bankAccount) {
            throw new Error(`Bank account with UId ${account.bankDetailsUId} not found`);
        }

        // Create a customer in GoCardless
        const gclCustomer = await client.customers.create({
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
        const customerBankAccount = await client.customerBankAccounts.create({
            account_number: bankAccount.accountNumber,
            branch_code: bankAccount.sortCode,
            account_holder_name: account.name,
            country_code: "GB",
            links: {
                customer: gclCustomer.id
            }
        });

        // Create a mandate
        const mandate = await client.mandates.create({
            scheme: "bacs",
            metadata: {
                contract_id: contract.id
            },
            links: {
                customer_bank_account: customerBankAccount.id,
                creditor: "CR123"
            }
        });
        console.log(mandate)
        return mandate;
    } catch (err: any) {
        console.error('Error creating mandate:', err);
        throw err;
    }
}
async function payment(data: any) {
    try {
        const islogin: any = await authentication(data);
        if (islogin) {
            const book: any = await Book.findByPk(data.bookId);
            if (book) {
                const payment = await client.payments.create({
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
                    const userAllOrder = await Payment.update(
                        { status: 'Initiating' },
                        {
                            where: {
                                userId: islogin.id,
                                bookId: data.bookId
                            }
                        })
                        console.log(userAllOrder)
                    return payment
                } else {
                    return "Error for initiating payment for book"
                }
            }
        }
    } catch (error) {
        return `Error in intiating payment ${error}`
    }
}


export { createAccount, getAccounts, ModifyAccount, deleteAccount, createContract, getContracts, CreateMandateForContract, CreateMandate, payment };