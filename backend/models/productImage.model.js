const productImage = (sequelize,DataTypes) =>{
    const ProductImage =  sequelize.define(
      "product_images",
      {
        prim_id: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true,
        },
        prim_file_name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        prim_path: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        prim_prod_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "product_images",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "product_images_pkey",
            unique: true,
            fields: [{ name: "prim_id" }],
          },
        ],
      }
    );
  //add association to product
     ProductImage.associate = models => {
       ProductImage.belongsTo(models.product,{foreignKey : 'prim_prod_id'})
       }
     return ProductImage;
}

export default productImage