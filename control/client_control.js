const {customer_model}=require("../model/customer_model");

const {bl_model}=require("../model/bl_model");

require("dotenv").config();

const crypto=require("bcrypt");

const my_jsonwebtoken=require("jsonwebtoken");

const customer_signup=async (request,response)=>{

    let {email,password,post}=request.body;

    try {

        let Customer=await customer_model.findOne({email});

        if(Customer){

            return response.status(409).send({ "success":false,"errs": "another login credential" });

        }

        const private_pswrd = crypto.hashSync(password, 7);

        let new_customer=new customer_model({email,password:private_pswrd,post});

        console.log(new_customer);

        await new_customer.save();

        response.status(200).send({ "success": true, "msg": "customer registeration completed"});

    } 
    
    catch (errs) {

        response.status(400).send({"errs":errs.msg});

    }

}

const customer_login = async (request, response) => {

    let { email, password } = request.body;
  
    try {

      const customer = await customer_model.findOne({ email });

      if (!customer) {

        return response.status(401).send({ success: false, errs: 'errs' });

      }
  
      crypto.compare(password, customer.password, function (errs, final) {

        if (errs) {

          return response.status(500).send({ success: false, errs: 'errs' });

        }

        if (final) {

          const token = my_jsonwebtoken.sign({ customer_id: customer._id, post: customer.post }, process.env.att, { expiresIn: '3d' });

          return response.status(200).send({ success: true, msg: 'Login successfully completed', token: token });

        } 
        
        else {

          return response.status(401).send({ success: false, errs: 'errs' });

        }

      });

    } 
    
    catch (errs) {

      return response.status(500).send({ success: false, errs: 'errs' });

    }

  };

const customer_logout=async (request,response)=>{

    let token=request.headers.token;

    try {

        const blck_tok = new bl_model({ token });

        await blck_tok.save();

        return response.status(200).send({success:false,msg:'Logout successfully completed'});

    } 
    
    catch (errs) {

        response.status(400).send({"errs":errs.msg});

    }

}

module.exports={customer_signup,customer_login,customer_logout};