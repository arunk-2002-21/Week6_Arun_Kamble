import { DataTypes, Model } from 'sequelize'
import sequelize from '../postgresDB/pgConfig';


interface AddressAttributes {
    id?: string;
    userId: string;
    line1: string;
    line2: string;
    city: string;
    postalCode: string;
}


class Address extends Model<AddressAttributes> implements AddressAttributes {
    public id!: string;
    public userId!: string;
    public line1!: string;
    public line2!: string;
    public city!: string;
    public postalCode!: string;
}


Address.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            unique: true,
        },
        line1: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        line2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postalCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'Addresses',
        timestamps: true,

    }
);

export { Address };