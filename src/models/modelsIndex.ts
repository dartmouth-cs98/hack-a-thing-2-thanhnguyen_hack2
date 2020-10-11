/*
 * Author: Thanh Nguyen Jr
 * Dartmouth College, Fall 2020
 *
 * Credits:
 *   https://www.robinwieruch.de/mongodb-express-setup-tutorial
 */
import mongoose from "mongoose";
import Session from "./sessionModel";
import Logging from "./loggingModel";

const connectDb = (): Promise<typeof mongoose> => {
  // Fix deprecation warnings https://mongoosejs.com/docs/deprecations.html
  mongoose.set("useNewUrlParser", true);
  mongoose.set("useCreateIndex", true);
  mongoose.set("useUnifiedTopology", true);
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { Session, Logging };

export { connectDb };

export default models;
