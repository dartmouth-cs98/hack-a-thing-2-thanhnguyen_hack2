/*
 * Author: Thanh Nguyen Jr
 * Dartmouth College, Fall 2020
 *
 * Credits:
 *   https://www.robinwieruch.de/node-js-express-tutorial
 */

import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    sessionID: { type: String, required: true, unique: true }, // uuid
  },
  { timestamps: true },
);

const Session = mongoose.model("Session", sessionSchema);

export default Session;
