import { defaultCipherList } from 'constants';
import { Model, Sequelize, DataTypes } from 'sequelize';
import { database } from '../database';
import { Product } from './product.model';
import { User } from './user.model';

export class Sales extends Model {
    public id!: number;
    public productId!: number;
    public userId!: number;
    public createdAt!: Date;
    public updatedAt!: Date;

    constructor(){
        super()
        User.belongsToMany(Product, {through: Sales})
        Product.belongsToMany(User, {through: Sales})

    }
}

Sales.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    productId:{
        type: DataTypes.INTEGER,
        references: {
            model: Product,
            key: 'id'
        }
    },
    userId:{
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    createdAt :{
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
},{
    tableName: 'sales',
    sequelize: database // Es donde decimos como conectanros a la base de datos
})

Sales.belongsTo(Product);
Sales.belongsTo(User);


