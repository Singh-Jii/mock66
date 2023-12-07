require("dotenv").config();

const {customer_model}=require("../model/customer_model");

const {bl_model}=require("../model/bl_model");

const my_jsonwebtoken=require("jsonwebtoken");

const my_authen=async(request,response,next)=>{

    const token=request.headers.token;

    if(token){

        try {

           const check_blc= await bl_model.findOne({token});

           if(check_blc){

            return response.status(401).send({"success":false,"errs": "login again"});

           }
           
           let  dtt = my_jsonwebtoken.verify(token, process.env.att);
           
           request.body.customer_id=dtt.customer_id;

           request.body.post = dtt.post;

                next();

        } 
        
        catch (errs) {

            response.status(400).send({"errs":errs.msg});

        }

    }
    
    else{

        return response.status(400).send({ "success":false,"errs": "start login" });

    }

}

module.exports={my_authen};