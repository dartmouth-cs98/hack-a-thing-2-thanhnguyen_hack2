/*
 * Author: Thanh Nguyen Jr
 * Dartmouth College, Fall 2020
 *
 * Credits:
 *   https://www.robinwieruch.de/node-js-express-tutorial
 */

type sessionModel = {
  sessionID: string; // uuid
  startTime: number; // in milliseconds since epoch
  endTime: number; // in milliseconds since epoch
};

export default sessionModel;
