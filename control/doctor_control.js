const { dr_model} = require("../model/dr_model");

const add_dr = async (request, response) => {

  const {name,image,specialization,experience,location,date,slots,amount}= request.body;

  try {

    const my_docus = new doctor_model({name,image,specialization,experience,location,date,slots,amount});

    await my_docus.save();

    response.status(200).send({ success: true, msg: "doctor data added" });

  } 
  
  catch (errs) {

    response.status(400).send({ errs: errs.msg });

  }

};

const chnge_dr = async (request, response) => {

  const dr_id = request.params.id;

  const chnge_dr_info = request.body;

  try {

    const my_docus = await dr_model.findByIdAndUpdate(dr_id, chnge_dr_info, {

        new: true,

      })

      response.status(200).send({ success: true, msg: "doctor information changed" });

  } 
  
  catch (errs) {

    response.status(400).send({ errs: errs.msg });

  }

};

const del_dr = async (request, response) => {

    const dr_id = request.params.id;

  try {

    let lovii=await dr_model.findByIdAndDelete(dr_id);

    response.status(200).send({ success: true, msg: "deleting all information" });

  } 
  
  catch (errs) {

    response.status(400).send({ errs: errs.msg });

  }

};

const get_dr = async (request, response) => {

  let{name,specialization,sortings}=request.query;

  try {

    name=new RegExp(name,'h');

    specialization=new RegExp(specialization,'h');

    if(sortings==='asc'){

      sortings=1;

    }
    
    else if(sortings==='desc'){

      sortings=-1;

    }

    if(sortings){

      collect=await dr_model.find({name,specialization}).sort({date:sortings});

    }
    
    else{

      collect=await dr_model.find({name,specialization});

    }

    response.status(200).send({ success: true,collect:collect,msg:"getting data completely"});

} 

catch (errs) {

    response.status(400).send({ errs: errs.msg });

}

};

module.exports = { add_dr, chnge_dr, del_dr, get_dr };