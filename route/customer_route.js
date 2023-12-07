const {routing}=require("express");


const customer_route=routing();


const {my_authen}=require("../middleware/authen_middleware");


const {customer_signup,customer_login,customer_logout}=require("../control/customer_control");

customer_route.post("/signup",customer_signup);


customer_route.post("/login",customer_login);

customer_route.post("/logout",my_authen,customer_logout);


module.exports={customer_route};