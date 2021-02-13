const orders = (sequelize,DataTypes)=>{
    const orders = sequelize.define('orders', {
            order_name: {
            type: DataTypes.STRING(55),
            allowNull: false,
            primaryKey: true
            },
            order_create_on: {
            type: DataTypes.DATE,
            allowNull: true
            },
            order_is_closed: {
            type: DataTypes.BOOLEAN,
            allowNull: true
            },
            order_total: {
            type: DataTypes.INTEGER,
            allowNull: true
            },
            order_user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'user_id'
            }
            }
    }, {
        sequelize,
        tableName: 'orders',
        schema: 'public',
        timestamps: false,
        indexes: [
        {
            name: "orders_pkey",
            unique: true,
            fields: [
            { name: "order_name" },
            ]
        },
        ]
        });
            orders.associate = models => {
                orders.hasMany(models.orderDetail, {foreignKey: 'ordi_order_name', onDelete: 'CASCADE' });
                orders.belongsTo(models.users,{foreignKey : 'order_user_id'})
             }
            return orders;
}
export default orders
