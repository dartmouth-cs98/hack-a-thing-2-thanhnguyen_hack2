/*
 * Author: Thanh Nguyen Jr
 * Dartmouth College, Fall 2020
 *
 * Credits:
 *   https://www.robinwieruch.de/node-js-express-tutorial
 */

import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser"; //allows us to get passed in api calls easily
import routes from "./routers/routerIndex";
import { connectDb } from "./models/modelsIndex";

// initialize configuration
dotenv.config();

// See .env file at the root of this project for defined environment variables
const port = process.env.SERVER_PORT;

// Configure CORS policy
const corsOptions = {
  origin: "*", // whitelisted origins
  optionsSuccessStatus: 200,
};

const app = express();

// Apply middleware
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// define a route handler for the root page
app.get("/", (_req, res) => {
  return res.send("What are you trying to GET from the root?");
});

// Routers
app.use("/session", routes.sessionRouter);
app.use("/logging", routes.loggingRouter);

// Connect to mongoDB and start the express server
connectDb().then(async () => {
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});
