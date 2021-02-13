const category = (sequelize,DataTypes)=>{
    const category =  sequelize.define('category', {
        cate_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        cate_name: {
          type: DataTypes.STRING(25),
          allowNull: true
        }
      }, {
        sequelize,
        tableName: 'category',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: "category_pkey",
            unique: true,
            fields: [
              { name: "cate_id" },
            ]
          },
        ]
      });
      category.associate = models => {
        category.hasMany(models.product,{foreignKey : 'prod_cate_id'})
      }

      return category;
}

export default category;