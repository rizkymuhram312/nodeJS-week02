import models from ".";

const province = (sequelize, DataTypes) => {
 const province = sequelize.define('province', {
    prov_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    prov_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'province',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "province_pkey",
        unique: true,
        fields: [
          { name: "prov_id" },
        ]
      },
    ]
  });

  //tambah
  province.associate = models => {
        province.hasMany(models.city, {foreignKey: 'city_prov_id', onDelete: 'CASCADE'}); // city_prov_id berdasrakan foreign key city
  };

  return province;
};

export default province;