import { Model, DataTypes } from "sequelize";
import sequelize from "../postgresDB/pgConfig";
import { v4 as uuidv4 } from 'uuid';

interface ReviewAttributes{
    id?: string;
    userId: string;
    bookId: string;
    content: string;
}

class Review extends Model<ReviewAttributes> implements ReviewAttributes {
    public id?: string;
    public userId!: string;
    public bookId!: string;
    public content!: string;
}

Review.init({
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
    content:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
    },
    {
        sequelize,
        tableName:'Reviews'
    }

);

export {Review};