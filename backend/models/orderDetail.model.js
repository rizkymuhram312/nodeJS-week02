import models from ".";

/*  Jika database already exist, gunakan module sequalize-auto
    untuk generate schema database secara reverse-engineering,
    buat arrow function regions lalu deklarasikan class model. 
    constructo sequalize(modelName, attributes,options)
 */
const orderDetail = (sequelize, DataTypes) => {
  const orderDetail = sequelize.define('order_detail', {
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
          allowNull: false,
          references: {
            model: 'orders',
            key: 'order_name'
          }
        },
        ordi_order_name: {
          type: DataTypes.STRING,
          allowNull: false,
          references: {
            model: 'orders',
            key: 'order_name',
            default: null
          }
        }
      }, {
        sequelize,
        tableName: 'order_detail',
        schema: 'public',
        timestamps: false
      });

      // orderDetail.removeAttribute('id')

      // // orderDetail.associate = models => {
      // // orderDetail.hasMany(models.cart, {foreignKey: 'cart_user_id', onDelete: 'CASCADE' });

      // // };
      // return orderDetail;
    
};  
    
export default orderDetail;
