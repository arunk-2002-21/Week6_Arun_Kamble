import { Model, DataTypes } from "sequelize";
import sequelize from "../postgresDB/pgConfig";
import { v4 as uuidv4 } from 'uuid';

interface RatingAttributes{
    id?: string;
    userId: string;
    bookId: string;
    rating: number;
}

class Rating extends Model<RatingAttributes> implements RatingAttributes {
    public id?: string;
    public userId!: string;
    public bookId!: string;
    public rating!: number;
}

Rating.init({
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
    rating:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
    },
    {
        sequelize,
        tableName:'Ratings'
    }

);

export  {Rating};