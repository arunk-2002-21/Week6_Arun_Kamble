import { Model, DataTypes } from "sequelize";
import sequelize from "../postgresDB/pgConfig";
import Book from "./book";
import User from "./user";


interface ReviewAttributes{
    id?: string;
    userId: string;
    bookId: string;
    content: string;
}

class Review extends Model<ReviewAttributes> implements ReviewAttributes {
    static find(arg0: { bookId: string; }) {
      throw new Error('Method not implemented.');
    }
    static findById(id: string) {
      throw new Error('Method not implemented.');
    }
    public id!: string;
    public userId!: string;
    public bookId!: string;
    public content!: string;
}

Review.init({
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
    content:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    }
    },
    {
        sequelize,
        tableName:'review'
    }

);

Review.belongsTo(User, { foreignKey: 'userId' });
Review.belongsTo(Book, { foreignKey: 'bookId' });

export default Review;