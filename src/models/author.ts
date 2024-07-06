import { Model, DataTypes } from "sequelize";
import sequelize from "../postgresDB/pgConfig";
import { v4 as uuidv4 } from 'uuid';

interface AuthorAttributes{
    id?: string;
    name: string;
    bio: string;
    birthdate: string;
    isSystemUser: boolean;
    }

class Author extends Model<AuthorAttributes> implements AuthorAttributes {
    public id!: string;
    public name!: string;
    public bio!: string;
    public birthdate!: string;
    public isSystemUser!: boolean;  
}

Author.init({
    id:{
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: uuidv4()
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true 
    }, 
    bio: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthdate:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    isSystemUser:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    },
    {
        sequelize,
        tableName:'Authors'
    }

);

export {Author};