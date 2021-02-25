import express from "express"; 
import dotenv from "dotenv"; 
dotenv.config(); 
import morgan from "morgan"; 
import globalRouter from "./router/globalRouter";
import boardRouter from "./router/boardRouter";
import path from "path";
import connect from "../db";
import bodyParser from "body-parser";

const PORT = process.env.PORT;
const app = express();

app.set("view engine", "pug");
app.use(morgan(`dev`));
app.use(express.static(path.join(__dirname, "/assets")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
connect();

app.use("/", globalRouter);
app.use("/board", boardRouter);

app.listen(PORT, () => {
  console.log(`${PORT} SERVER START`);
});
