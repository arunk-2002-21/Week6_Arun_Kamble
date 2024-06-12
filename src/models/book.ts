import { Model, DataTypes } from "sequelize";
import sequelize from "../postgresDB/pgConfig";
import Author from "./author";
import Payment from "./payment";
import Rating from "./rating";
import Review from "./review";


interface BookAttributes{
    id?: string;
    bookCode: string;
    title: string;
    description: string;
    publishedYear: Date;
    price: number;
    authors: string;
    externalId: string;
}

class Book extends Model<BookAttributes> implements BookAttributes {
    static findById(bookId: any) {
      throw new Error('Method not implemented.');
    }
    public id!: string;
    public bookCode!: string;
    public title!: string;
    public description!: string;
    public publishedYear!: Date;   
    public price!: number;    
    public authors!: string;    
    public externalId!: string;    

}

Book.init({
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    bookCode:{
      type: DataTypes.STRING,
      allowNull: false 
    }, 
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    publishedYear:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    authors: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    externalId: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    },
    {
        sequelize,
        tableName:'book'
    }

);

Book.belongsToMany(Author, { through: 'BookAuthors' });
Book.hasMany(Review, { foreignKey: 'bookId' });
Book.hasMany(Rating, { foreignKey: 'bookId' });
Book.hasMany(Payment, { foreignKey: 'bookId' });

export default Book;