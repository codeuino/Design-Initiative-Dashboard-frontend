const mongoose = require('mongoose');
module.exports = {
  connectToDb: () => {
   mongoose
     .connect(process.env.MONGO_URI, { 
       useNewUrlParser: true,
       useUnifiedTopology: true 
      })
     .then(() => {
       console.log("Mongo connected!");
     })
     .catch(err => {
       console.log("MongoError ", err);
     });
  }
}