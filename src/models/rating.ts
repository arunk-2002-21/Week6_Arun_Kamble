import { Model, DataTypes } from "sequelize";
import sequelize from "../postgresDB/pgConfig";
import Book from "./book";
import User from "./user";


interface RatingAttributes{
    id?: string;
    userId: string;
    bookId: string;
    rating: number;
}

class Rating extends Model<RatingAttributes> implements RatingAttributes {
    public id!: string;
    public userId!: string;
    public bookId!: string;
    public rating!: number;
}

Rating.init({
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
    rating:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
    },
    {
        sequelize,
        tableName:'rating'
    }

);

Rating.belongsTo(User, { foreignKey: 'userId' });
Rating.belongsTo(Book, { foreignKey: 'bookId' });

export default Rating;