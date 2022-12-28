import express from "express";
import dotenv from "dotenv-defaults";
import cors from "cors";
import db from "./db";
import routes from "./routes";
import bodyParser from "body-parser";
dotenv.config();

db.connect();

const app = express();
const port = process.env.PORT || 4000;
if (process.env.NODE_ENV === "development") {
  app.use(cors());
}
app.use(bodyParser.json()); //https://ithelp.ithome.com.tw/articles/10241083

app.use("/api", routes);
app.get("/api", (req, res) => {
  res.send("Hello, World!");
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
