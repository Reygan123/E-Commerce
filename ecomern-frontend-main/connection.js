require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = "mongodb+srv://fadhilahreygan:Giriharja123@cluster0.a1xclp4.mongodb.net/tgs-besar?retryWrites=true&w=majority";

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})
