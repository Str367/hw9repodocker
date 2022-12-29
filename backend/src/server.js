import express from "express";
import dotenv from "dotenv-defaults";
import cors from "cors";
import db from "./db";
import routes from "./routes";
import bodyParser from "body-parser";
dotenv.config();

db.connect();

const app = express();
app.use(bodyParser.json()); //https://ithelp.ithome.com.tw/articles/10241083

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "../frontend", "build")));
  app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
  });
}
if (process.env.NODE_ENV === "development") {
  app.use(cors());
}
const port = process.env.PORT || 4000;

app.use("/", routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
