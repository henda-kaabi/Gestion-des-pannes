const express = require("express");
const  mongoose = require("mongoose");
const session = require('./session');
const routes = require('./routes');
const app = express();


app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);

const port =5000;

app.listen(port,()=> {
  console.log("Server is runinng on port : ",port)
});


mongoose.connect("mongodb://localhost:27017/panne", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => { console.log("Mongodb connected") }).catch((err) => console.log(err))



