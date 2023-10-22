const express = require("express");
const app = express();
const path = require("path");
require('dotenv').config();

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"views/home.html"));
})

app.use(express.static("public"));


app.listen(process.env.PORT,()=>{
    console.log(`server listen in port ${process.env.PORT}`);
});