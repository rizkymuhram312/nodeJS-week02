const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
//create pool for pg DB
const Pool = require("pg").Pool;
const { viewCategory, insertCategory, updateCategory, deleteCategory, filterCategory } = require("./10-cate-api2");
const { viewProvince, insertProvince, updateProvince, deleteProvince, filterProvince } = require("./07-province-api2");
const { viewRoles,insertRoles, updateRoles, deleteRoles, filterRoles } = require("./08-roles-api2");
const { viewUsers, insertUsers, updateUsers, deleteUsers, filterUsers } = require("./09-users-api2");
const { viewCity, insertCity, updateCity, deleteCity, filterCity } = require("./11-city-api2");
const { viewProduct, insertProduct, updateProduct, deleteProduct, filterProduct } = require("./12-product-api2");
const { viewAddress, insertAddress, updateAddress, deleteAddress, filterAddress } = require("./13-address-api2");
const { viewUserRoles, insertUserRoles, updateUserRoles, deleteUserRoles, filterUserRoles } = require("./14-userRoles-api2");
const { viewProductImages, insertProductImages, updateProductImages, deleteProductImages, filterProductImages } = require("./15-productImages-api2");


const pool = new Pool({
    user : "postgres",
    password : "root",
    host : "localhost",
    port : "5432",
    database : "ecomm"

});

const app = express();

app.use(cors());
app.use(express.urlencoded({extended : true}));
app.use(express.json());

const port = process.env.PORT || 1337;

app.listen(port, () => console.log(`Server listening on port ${port}`));

//Category
viewCategory(app,pool);
insertCategory(app,pool);
updateCategory(app,pool);
deleteCategory(app,pool);
filterCategory(app,pool);

//Province
viewProvince(app,pool);
insertProvince(app,pool);
updateProvince(app,pool);
deleteProvince(app,pool);
filterProvince(app,pool);

//Roles
viewRoles(app,pool);
insertRoles(app,pool);
updateRoles(app,pool);
deleteRoles(app,pool);
filterRoles(app,pool);

//Users
viewUsers(app,pool);
insertUsers(app,pool);
updateUsers(app,pool);
deleteUsers(app,pool);
filterUsers(app,pool);

//City
viewCity(app,pool);
insertCity(app,pool);
updateCity(app,pool);
deleteCity(app,pool);
filterCity(app,pool);

//Product
viewProduct(app,pool);
insertProduct(app,pool);
updateProduct(app,pool);
deleteProduct(app,pool);
filterProduct(app,pool);

//Address
viewAddress(app,pool);
insertAddress(app,pool);
updateAddress(app,pool);
deleteAddress(app,pool);
filterAddress(app,pool);

//UserRoles
viewUserRoles(app,pool);
insertUserRoles(app,pool);
updateUserRoles(app,pool);
deleteUserRoles(app,pool);
filterUserRoles(app,pool);

//ProductImages
viewProductImages(app,pool);
insertProductImages(app,pool);
updateProductImages(app,pool);
deleteProductImages(app,pool);
filterProductImages(app,pool);
