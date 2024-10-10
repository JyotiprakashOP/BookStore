const mongoose = require('mongoose');
const dotenv = require("dotenv")
const color = require('colors')
//.env config
dotenv.config()

const dbConnect = async (req,res)=>{
    try{
        await mongoose.connect(process.env.URL)
        console.log(`database connected`.bgBlue.white)
    }
    catch(err){
        console.log(`not connected`.bgRed.white,err)
    }
}

module.exports = {dbConnect}