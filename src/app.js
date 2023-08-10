import express from "express";
import cors from "cors";
import httpStatus from "http-status";
import routes from "./routes";
import ApiError from "./utils/apiError";

const app = express();

// automatically parse json request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/", routes);

app.use((req, res, next) => {
  console.log(req.url);
  next(new ApiError(httpStatus.NOT_FOUND, "Request route not found"));
});

export default app;
