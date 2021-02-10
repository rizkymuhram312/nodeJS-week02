const users = (sequelize,DataTypes)=>{
    const Users = sequelize.define('users', {
        user_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        user_name: {
          type: DataTypes.STRING(55),
          allowNull: true
        },
        user_email: {
          type: DataTypes.STRING(55),
          allowNull: true
        },
        user_password: {
          type: DataTypes.STRING(255),
          allowNull: true
        }
      }, {
        sequelize,
        tableName: 'users',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: "users_pkey",
            unique: true,
            fields: [
              { name: "user_id" },
            ]
          },
        ]
      });
<<<<<<< HEAD
      Users.associate = models => {
        Users.hasOne(models.address,{foreignKey : 'add_user_id',onDelete : 'CASCADE'});
      };
=======
      // Users.associate = models => {
      //   Users.hasMany(models.address,{primaryKey : 'user_id', onDelete : 'CASCADE'})
      // }     
>>>>>>> 38b0fa60375cadb638b1a04f77a599b14a21835d
      return Users;
}

export default users