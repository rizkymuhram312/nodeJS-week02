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
    address : sequelize.import('./address.model'),
<<<<<<< HEAD
    productImage : sequelize.import('./productImage.model')
=======
    city : sequelize.import('./city.model')

>>>>>>> ccb901a2c74f93b86426629b820e6d19e7106e93
};

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
      models[key].associate(models);
    }
  });

export default models;


