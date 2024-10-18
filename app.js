require('dotenv').config();
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/online-chat');

const app = require('express')();
const http = require('http').Server(app);
 
const userRoute = require('./routes/userRouts');
app.use('/',userRoute);

http.listen(4000, function () {
    console.log("server is running in port 4000");
});