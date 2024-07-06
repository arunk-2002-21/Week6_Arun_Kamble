import { Model, DataTypes } from "sequelize";
import sequelize from "../postgresDB/pgConfig";
import { v4 as uuidv4 } from 'uuid';
import { User } from "./user";
import {Author} from "./author";
import { Payment } from "./payment";
import { Review } from "./review";
import { Rating } from "./rating";

interface BookAttributes{
    id?: string;
    bookCode: string;
    title: string;
    description: string;
    publishedYear: number;
    price: number;
    authors: string [];
    externalId: string;
}

class Book extends Model<BookAttributes> implements BookAttributes {
    public id!: string;
    public bookCode!: string;
    public title!: string;
    public description!: string;
    public publishedYear!: number;   
    public price!: number;    
    public authors!: string [];    
    public externalId!: string;    

}

Book.init({
    id:{
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: uuidv4()
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
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    authors: {
        type: DataTypes.JSONB,
        allowNull: false,
    },
    externalId: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    },
    {
        sequelize,
        tableName:'Books'
    }
);

Book.hasMany(Author)
Author.hasMany(Book)
Book.belongsTo(Author)
Author.belongsTo(Book)
Book.hasMany(Review, {
    foreignKey : 'bookId'
})
Review.belongsTo(Book, {
    foreignKey : 'bookId'
})
Book.hasMany(Rating, {
    foreignKey : 'bookId'
})
User.hasMany(Review, {
    foreignKey : 'userId'
})
Review.belongsTo(User, {
    foreignKey : 'userId'
})
User.hasMany(Rating, {
    foreignKey : 'userId'
})
Rating.belongsTo(User, {
    foreignKey : 'userId'
})
User.hasMany(Payment, {
    foreignKey: 'userId'
})
Payment.belongsTo(User, {
    foreignKey : 'userId'
})
Book.hasMany(Payment, {
    foreignKey: 'bookId'
})
Payment.belongsTo(Book, {
    foreignKey: 'bookId'
})

export {Book}