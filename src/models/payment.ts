import { Model, DataTypes } from "sequelize";
import sequelize from "../postgresDB/pgConfig";
import Book from "./book";
import User from "./user";


interface PaymentAttributes{
    id?: string;
    userId: string;
    bookId: string;
    amount: number;
    status: string;
    createdAt: Date;
}

class Payment extends Model<PaymentAttributes> implements PaymentAttributes {
    static findById(id: string) {
      throw new Error('Method not implemented.');
    }
    public id!: string;
    public userId!: string;
    public bookId!: string;
    public amount!: number;
    public  status!: string;
    public createdAt!: Date;
    
}

Payment.init({
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    userId:{
      type: DataTypes.STRING,
      allowNull: false 
    }, 
    bookId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt:{
        type: DataTypes.DATE,
        allowNull: false,
    }
    },
    {
        sequelize,
        tableName:'payment'
    }

);

Payment.belongsTo(User, { foreignKey: 'userId' });
Payment.belongsTo(Book, { foreignKey: 'bookId' });

export default Payment;