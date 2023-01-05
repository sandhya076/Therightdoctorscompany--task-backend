import Mongoose from "mongoose";

const PERSONSchema = Mongoose.Schema({
  Name: String,
  Age: String,
  Gender: String,
  MobileNumber: String,
});

const persondata = Mongoose.model("persondata", PERSONSchema);
export default persondata;