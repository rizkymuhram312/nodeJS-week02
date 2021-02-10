const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_roles', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'user_id'
      }
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'user_roles',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_roles_pkey",
        unique: true,
        fields: [
          { name: "user_id" },
          { name: "role_id" },
        ]
      },
    ]
  });
};
