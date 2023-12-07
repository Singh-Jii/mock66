require("dotenv").config();

const my_exp=require("express");

const my_cp=require("cors");

const {connecting}=require("./db/db");

const {customer_route}=require("./route/customer_route");

const {dr_route}=require("./route/dr_route");

const my_apps=my_exp();

my_apps.use(my_exp.json());

my_apps.use(my_cp());

my_apps.get("/",async(request,response)=>{

    return response.status(200).send({msg:`endpoint here.`});

})

my_apps.use("/",customer_route);

my_apps.use("/",dr_route);

my_apps.all("*",async(request,response)=>{

    return response.status(404).send("404 error");

})

my_apps.listen(process.env.my_port,async()=>{

    try {

        await connecting;

        console.log("database added");

    } 
    
    catch (errs) {

        console.log(errs.msg);

    }

    console.log(`${process.env.my_port}`);
    
})