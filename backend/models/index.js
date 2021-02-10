import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
      dialect: 'postgres',
    },
  );

const Op = Sequelize.Op;
=======
const Op = Sequelize.Op;
>>>>>>> ab11ebca1d13fb291d91bd7b884412a78afd2f0a

const models = {
    category : sequelize.import('./category.model'),
    users : sequelize.import('./users.model'),
    address : sequelize.import('./address.model'),
    province : sequelize.import('./province.model'),
    city : sequelize.import('./city.model'),
    productImage : sequelize.import('./productImage.model'),
    roles : sequelize.import('./roles.model'),
    product : sequelize.import('./product.model'),
    userRole : sequelize.import('./userRole.model')
};

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
      models[key].associate(models);
    }
  });


export {Op };
export default models;
// // export { sequelize };
// export default models;
