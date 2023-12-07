const my_mongoose=require("mongoose");

const bl_schema=my_mongoose.Schema({

    token: {

        type: String,

        req: true,

        unique: true,

    },

},

{

    versionKey : false,

    timestamps :true

});

const bl_model=my_mongoose.model("blacklist",bl_schema);

module.exports={bl_model};