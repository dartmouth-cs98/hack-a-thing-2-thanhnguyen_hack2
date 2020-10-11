/*
 * Author: Thanh Nguyen Jr
 * Dartmouth College, Fall 2020
 *
 * Route for logging client side data.
 *
 * Credits:
 *   https://www.robinwieruch.de/node-js-express-tutorial
 */

import { Router } from "express";

const router = Router();

// GET - specify number of sessions to get data from, will get the most recent data - anyone
router.get("/:numberOfSessions", (req, res) => {
  return res.send("Received a GET HTTP method");
});

// GET - specify date to get logging data from - anyone
router.get("/:millisecondsSinceEpoch", (req, res) => {
  return res.send("Received a GET HTTP method");
});

// POST - can only write data for current session
router.post("/", (req, res) => {
  return res.send("Received a POST HTTP method");
});

// PUT - update logging data for current session
router.put("/", (req, res) => {
  return res.send("Received a PUT HTTP method");
});

// DELETE - client should never delete logging data

export default router;
