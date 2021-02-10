var DataTypes = require("sequelize").DataTypes;
var _address = require("./address");
var _cart = require("./cart");
var _category = require("./category");
var _city = require("./city");
var _order_detail = require("./order_detail");
var _orders = require("./orders");
var _product = require("./product");
var _product_images = require("./product_images");
var _province = require("./province");
var _roles = require("./roles");
var _user_roles = require("./user_roles");
var _users = require("./users");

function initModels(sequelize) {
  var address = _address(sequelize, DataTypes);
  var cart = _cart(sequelize, DataTypes);
  var category = _category(sequelize, DataTypes);
  var city = _city(sequelize, DataTypes);
  var order_detail = _order_detail(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var product_images = _product_images(sequelize, DataTypes);
  var province = _province(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var user_roles = _user_roles(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  product.belongsTo(category, { as: "prod_cate", foreignKey: "prod_cate_id"});
  category.hasMany(product, { as: "products", foreignKey: "prod_cate_id"});
  address.belongsTo(city, { as: "add_user", foreignKey: "add_user_id"});
  city.hasMany(address, { as: "addresses", foreignKey: "add_user_id"});
  order_detail.belongsTo(orders, { as: "ordi_order_name_order", foreignKey: "ordi_order_name"});
  orders.hasMany(order_detail, { as: "order_details", foreignKey: "ordi_order_name"});
  city.belongsTo(province, { as: "city_prov", foreignKey: "city_prov_id"});
  province.hasMany(city, { as: "cities", foreignKey: "city_prov_id"});
  address.belongsTo(users, { as: "add_city", foreignKey: "add_city_id"});
  users.hasMany(address, { as: "addresses", foreignKey: "add_city_id"});
  cart.belongsTo(users, { as: "cart_user", foreignKey: "cart_user_id"});
  users.hasMany(cart, { as: "carts", foreignKey: "cart_user_id"});
  orders.belongsTo(users, { as: "order_user", foreignKey: "order_user_id"});
  users.hasMany(orders, { as: "orders", foreignKey: "order_user_id"});
  user_roles.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(user_roles, { as: "user_roles", foreignKey: "user_id"});

  return {
    address,
    cart,
    category,
    city,
    order_detail,
    orders,
    product,
    product_images,
    province,
    roles,
    user_roles,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
