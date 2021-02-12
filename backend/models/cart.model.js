import models from ".";

/*  Jika database already exist, gunakan module sequalize-auto
    untuk generate schema database secara reverse-engineering,
    buat arrow function regions lalu deklarasikan class model. 
    constructo sequalize(modelName, attributes,options)
 */
const cart = (sequelize, DataTypes) => {
  const cart = sequelize.define('cart', {

        cart_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        cart_created_on: {
          type: DataTypes.DATE,
          allowNull: true
        },
        cart_is_closed: {
          type: DataTypes.BOOLEAN,
          allowNull: true
        },
        cart_total: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        cart_user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'user_id'
          }
        }
      }, {
        sequelize,
        tableName: 'cart',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: "cart_pkey",
            unique: true,
            fields: [
              { name: "cart_id" },
            ]
          },
        ]
      });

      
        // cart.associate = models => {
        // cart.belongsTo(models.orderDetail, {foreignKey: 'cart_user_id' });
  
        // };
        // return cart;
};
    
export default cart;