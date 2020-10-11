/*
 * Author: Thanh Nguyen Jr
 * Dartmouth College, Fall 2020
 *
 * Credits:
 *   https://www.robinwieruch.de/node-js-express-tutorial
 */

type loggingModel = {
  sessionID: string; // uuid
  landingPageSurveyRating?: number; // range [1:5]
  landingPageFeedback?: string;
  dashboardRating?: number;
  dashboardFeedback?: string;
};

export default loggingModel;
