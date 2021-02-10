/*  Jika database already exist, gunakan module sequalize-auto
    untuk generate schema database secara reverse-engineering,
    buat arrow function regions lalu deklarasikan class model. 
    constructo sequalize(modelName, attributes,options)
 */

const city = (sequelize, DataTypes) => {
    return sequelize.define('city', {
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

};

export default city;