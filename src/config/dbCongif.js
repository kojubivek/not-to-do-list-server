import mongoose from "mongoose";

const mongoConnect = async () => {
  try {
    const conStrt = "mongodb://localhost:27017/not_to_do_list";
    const con = await mongoose.connect(conStrt);
    con && console.log("mongo connected");
  } catch (error) {
    console.log(error);
  }
};

export default mongoConnect;
