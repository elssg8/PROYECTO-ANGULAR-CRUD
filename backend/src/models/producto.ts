import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Producto = db.define('producto', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DOUBLE
    },
    stock: {
        type: DataTypes.NUMBER
    }
},
{
    createdAt: false,
    updatedAt: false
})

export default Producto;