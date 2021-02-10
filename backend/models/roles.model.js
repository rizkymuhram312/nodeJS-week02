const roles = (sequelize,DataTypes)=>{

    const roles =  sequelize.define('roles', {
        role_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        role_name: {
          type: DataTypes.STRING(25),
          allowNull: true
        }
      }, {
        sequelize,
        tableName: 'roles',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: "roles_pkey",
            unique: true,
            fields: [
              { name: "role_id" },
            ]
          },
        ]
      });

      roles.associate = models => {
        roles.hasMany(models.userRole, {foreignKey: 'user_id', onDelete: 'CASCADE' });
      };

      return roles;
};
export default roles