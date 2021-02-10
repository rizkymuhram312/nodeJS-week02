const product = (sequelize,DataTypes)=>{
  const Product = sequelize.define('product', {
    prod_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    prod_title: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    prod_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    prod_stock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prod_price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prod_manufacture: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    prod_image: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    prod_cate_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'category',
        key: 'cate_id'
      }
    }
  }, {
    sequelize,
    tableName: 'product',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "product_pkey",
        unique: true,
        fields: [
          { name: "prod_id" },
        ]
      },
    ]
  });
   //add association to product_images
   Product.associate = models => {
     Product.hasMany(models.productImage,{foreignKey : 'prim_prod_id', onDelete : 'CASCADE'})
     }
   return Product 
}

export default product;