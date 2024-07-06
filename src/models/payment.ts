import { Model, DataTypes } from "sequelize";
import sequelize from "../postgresDB/pgConfig";
import { v4 as uuidv4 } from 'uuid';

interface PaymentAttributes{
    id?: string;
    userId: string;
    bookId: string;
    amount: number;
    status: string;
}

class Payment extends Model<PaymentAttributes> implements PaymentAttributes {
    public id!: string;
    public userId!: string;
    public bookId!: string;
    public amount!: number;
    public  status!: string;
    
}

Payment.init({
    id:{
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: uuidv4()
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
    },
    {
        sequelize,
        tableName:'Payments'
    }

);

export {Payment}