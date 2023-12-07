const {routing}=require("express");


const dr_route=routing();

const {my_authen}=require("../middleware/authen_middleware");


const {check_role}=require("../middleware/post_middleware");


const {add_dr,chnge_dr,del_dr,get_dr}=require("../control/dr_control");

dr_route.post("/appointments",my_authen,check_role(["user"]),add_dr);


dr_route.patch("/appointments/:id",my_authen,check_role(["user"]),chnge_dr);

dr_route.delete("/appointments/:id",my_authen,check_role(["user"]),del_dr);


dr_route.get("/appointments",my_authen,get_dr);


module.exports={dr_route};