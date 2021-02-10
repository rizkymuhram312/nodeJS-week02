import Sequelize from 'sequelize'

export const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
      dialect: 'postgres',
    },
  );

const models = {
    category : sequelize.import('./category.model'),
<<<<<<< HEAD
    address : sequelize.import('./address.model'),
    users : sequelize.import('./users.model')
=======
<<<<<<< HEAD
    address : sequelize.import('./address.model'),
    province : sequelize.import('./province.model'),
    city : sequelize.import('./city.model'),
    productImage : sequelize.import('./productImage.model'),
    roles : sequelize.import('./roles.model')
=======
    product : sequelize.import('./product.model')

>>>>>>> 9b51b010a48ee28a47b2fb390acca688310deef6
>>>>>>> 8bb4a58d37b085cfb17cfacee3ae04880c8ba0a3
};

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
      models[key].associate(models);
    }
  });


// export { sequelize };
export default models;


