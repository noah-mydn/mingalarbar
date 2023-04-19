const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});

const app = require('./app/app');
//console.log(process.env);

mongoose.connect(process.env.CONN_STR, {
    useNewUrlParser: true,
}).then((conn)=>{
    console.log('Connected to mongoDB');
}).catch((error)=>{
    console.log(error);
})


const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("Server has started!");
})