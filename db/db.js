require("dotenv").config();

const my_mongoose=require("mongoose");

const connecting=my_mongoose.connect(process.env.mongo_url);

module.exports={connecting};