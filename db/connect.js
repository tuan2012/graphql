const mongoose = require("mongoose");
const uri =
  "mongodb+srv://cxtuan:cxtuan@cluster0.1l7rc.mongodb.net/database?retryWrites=true&w=majority";
const ConnectDB = async()=>{
    mongoose
    .connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(rs=> console.log("connect DB success"))
    .catch((err) => console.log("[DB]: connect fail\n[DB] " + err.message));
}
module.exports = ConnectDB

