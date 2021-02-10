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
    province : sequelize.import('./province.model'),
    city : sequelize.import('./city.model'),
    productImage : sequelize.import('./productImage.model'),
    roles : sequelize.import('./roles.model')
=======
    product : sequelize.import('./product.model')

>>>>>>> 9b51b010a48ee28a47b2fb390acca688310deef6
};

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
      models[key].associate(models);
    }
  });


// export { sequelize };
export default models;


