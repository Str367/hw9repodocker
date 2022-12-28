import mongoose from "mongoose";
import dotenv from "dotenv-defaults";
export default {
  connect: () => {
    /* code to connect Mongoose DB */
    mongoose
      .connect(
        "mongodb+srv://Str367:Aron55668899@strsclusterforwp.gsdiboi.mongodb.net/?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then((res) => console.log("mongo db connection created"));
  },
};
