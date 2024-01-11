const express=require("express");
const mongoose=require("mongoose");
const app=express();
const dotenv=require("dotenv");
dotenv.config();
const cors=require("cors");
app.use(cors());
const cookieparser=require("cookie-parser")
app.use(cookieparser());


const router=require('./serverroutes/Serverroutes');
app.use(router);



const bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:true,parameterLimit:100000,limit:"500mb"}));
// app.use(express.json());
app.use(bodyparser.json());
app.use('/images', express.static('images'));

//mongoose connection
mongoose.connect(process.env.dbconnect,({useNewUrlParser:true,useUnifiedTopology: true})).then(()=>{
    console.log("connectedtodb");
})
// mongoose.connect('mongodb+srv://dgurupravallika:dgurupravallika@cluster0.ev5v8rt.mongodb.net/',({useNewUrlParser:true,useUnifiedTopology: true})).then(()=>{
//     console.log("connectedtodb");
// })

app.listen(process.env.PORT,()=>{
    console.log("server running");
})