import { Model, DataTypes } from "sequelize";
import sequelize from "../postgresDB/pgConfig";
import Payment from "./payment";
import Rating from "./rating";
import Review from "./review";


interface UserAttributes{
    id?: string;
    username: string;
    password: string;
    email: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
    comparePassword(password: any) {
      throw new Error('Method not implemented.');
    }
    _id: any;
    role: any;
    static findById(id: any) {
      throw new Error('Method not implemented.');
    }
    public id!: string;
    public username!: string;
    public password!: string;
    public email!: string;
}

User.init({
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    username:{
      type: DataTypes.STRING,
      allowNull: false 
    }, 
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    }
    },
    {
        sequelize,
        tableName:'user'
    }

);

User.hasMany(Review, { foreignKey: 'userId' });
User.hasMany(Rating, { foreignKey: 'userId' });
User.hasMany(Payment, { foreignKey: 'userId' });

export default User;