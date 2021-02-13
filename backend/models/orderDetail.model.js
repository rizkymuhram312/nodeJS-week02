const orderDetail = (sequelize, DataTypes)=>{
    const OrderDetail = sequelize.define('order_detail', {
        ordi_quantity: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ordi_price: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        ordi_cart_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        ordi_prod_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        ordi_order_name: {
          type: DataTypes.STRING,
          allowNull: false,
          references: {
            model: 'orders',
            key: 'order_name'
          }
        }
      }, {
        sequelize,
        tableName: 'order_detail',
        schema: 'public',
        timestamps: false
      });
      OrderDetail.removeAttribute('id');
      OrderDetail.associate = models => {
      OrderDetail.belongsTo(models.orders, {foreignKey: 'ordi_order_name'});
      OrderDetail.belongsTo(models.cart,{foreignKey : 'ordi_cart_id'})
      }
      return OrderDetail;
    }
export default orderDetail;
