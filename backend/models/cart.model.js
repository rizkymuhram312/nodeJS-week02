
const cart = (sequelize,DataTypes) => {
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

      cart.associate = models => {
        cart.hasMany(models.orderDetail, {foreignKey: 'ordi_cart_id', onDelete: 'CASCADE'}); // city_prov_id berdasrakan foreign key city
  };

      return cart;
};

export default cart;