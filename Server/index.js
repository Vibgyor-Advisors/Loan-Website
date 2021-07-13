const express=require('express');
const mongoose=require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const cors=require('cors');
const app=express();
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({extended:false}));//urlencoded
app.use(cors());//cors
console.log(process.env.DATABASE);
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
console.log(DB);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
     useUnifiedTopology: true 
  })
  .then(() => console.log('DB connection successful!'));
  const bankRouter=require('./Route/Route');  
const port = process.env.PORT || 5000;
app.use('/',bankRouter);
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});