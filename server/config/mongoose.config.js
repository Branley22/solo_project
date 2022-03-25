// const database = require("mime-db");
const mongoose = require("mongoose");
const dbName = "books";

mongoose.connect("mongodb://localhost/" + dbName,{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>{
  console.log(`connected to the ${dbName} database`);
})
.catch(()=>{
  console.log(`error connecting to the ${database} name`);
  console.log(err);
})