/*
 * Author: Thanh Nguyen Jr
 * Dartmouth College, Fall 2020
 *
 * Credits:
 *   https://www.robinwieruch.de/node-js-express-tutorial
 */
import mongoose from "mongoose";

const loggingSchema = new mongoose.Schema(
  {
    sessionID: { type: String, required: true, unique: true }, // uuid
    landingPageSurveyRating: { type: Number }, // range [1:5]
    landingPageFeedback: { type: String },
    dashboardRating: { type: Number }, // range [1:5]
    dashboardFeedback: { type: String },
  },
  { timestamps: true },
);

const Logging = mongoose.model("Logging", loggingSchema);

export default Logging;
