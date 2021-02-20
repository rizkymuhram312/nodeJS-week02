/*  Jika database already exist, gunakan module sequalize-auto
    untuk generate schema database secara reverse-engineering,
    buat arrow function regions lalu deklarasikan class model. 
    constructo sequalize(modelName, attributes,options)
 */
const city = (sequelize, DataTypes) => {
  const city = sequelize.define('city', {

        city_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        city_name: {
          type: DataTypes.STRING(100),
          allowNull: true
        },
        city_prov_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'province',
            key: 'prov_id'
          }
        }
      }, {
        sequelize,
        tableName: 'city',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: "city_pkey",
            unique: true,
            fields: [
              { name: "city_id" },
            ]
          },
        ]
      });
      // table regions hasMany Countries, set foreignkey sesuai relasi di table    
      city.associate = models => {
        city.hasMany(models.address, {foreignKey: 'add_city_id', onDelete: 'CASCADE' });
        city.belongsTo(models.province,{foreignKey: 'city_prov_id'});
      };

 

      // city.associate = models => {
      //   city.belongsTo(models.province,{foreignKey: 'city_prov_id'});
      // };
      return city;

};

export default city;