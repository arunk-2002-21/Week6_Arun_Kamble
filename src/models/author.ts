import { Model, DataTypes } from "sequelize";
import sequelize from "../postgresDB/pgConfig";
import Book from "./book";


interface AuthorAttributes{
    id?: string;
    name: string;
    bio: string;
    birthdate: number;
    isSystemUser: boolean;
    }

class Author extends Model<AuthorAttributes> implements AuthorAttributes {
    public id!: string;
    public name!: string;
    public bio!: string;
    public birthdate!: number;
    public isSystemUser!: boolean;  
}

Author.init({
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false 
    }, 
    bio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthdate:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    isSystemUser:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    },
    {
        sequelize,
        tableName:'author'
    }

);

Author.belongsToMany(Book, { through: 'BookAuthors' });

export default Author;