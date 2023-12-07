const my_mongoose=require("mongoose");

const customer_schema=my_mongoose.Schema({

    email:{
        
        type:String,

        req:[true,"email not found"],

        unique:true,

        trim:true
    
    },

    password:{
        
        type:String,
        
        req:[true,"password not found"],
        
        trim:true
    
    },

    role: {

        type: String,

        req: true,

        default: "user",

        enum: ["user","admin"],

    }

},

{

    versionKey:false,

    timestamps:true

})

const customer_model=my_mongoose.model("user",customer_schema);

module.exports={customer_model};