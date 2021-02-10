const address = (sequelize,DataTypes)=>{
  const address = sequelize.define('address', {
        addr_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        addr_email: {
          type: DataTypes.STRING(55),
          allowNull: true
        },
        addr_fullname: {
          type: DataTypes.STRING(55),
          allowNull: true
        },
        addr_phone_number: {
          type: DataTypes.STRING(18),
          allowNull: true
        },
        addr_is_default: {
          type: DataTypes.BOOLEAN,
          allowNull: true
        },
        addr_zipcode: {
          type: DataTypes.STRING(15),
          allowNull: true
        },
        addr_street1: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        addr_street2: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        add_city_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'user_id'
          }
        },
        add_user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'city',
            key: 'city_id'
          }
        }
      }, {
        sequelize,
        tableName: 'address',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: "address_pkey",
            unique: true,
            fields: [
              { name: "addr_id" },
            ]
          },
        ]
      });
      
      // table Countries belong to Regions, pastikan relasi fk di set sesuai relasi di table, 
      address.associate = models => {
      address.belongsTo(models.city,{foreignKey: 'add_city_id'});
      };

      return address;
    };
export default address