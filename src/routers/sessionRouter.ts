/*
 * Author: Thanh Nguyen Jr
 * Dartmouth College, Fall 2020
 *
 * Route to get data on the current user session.
 *
 * Credits:
 *   https://www.robinwieruch.de/node-js-express-tutorial
 */

import { Router } from "express";

const router = Router();

// GET - current session only
router.get("/", (req, res) => {
  return res.send("Received a GET HTTP method");
});

// POST - called when a new session is created
router.post("/", (req, res) => {
  return res.send("Received a POST HTTP method");
});

// PUT - called to update the session data when the session is finished
router.put("/", (req, res) => {
  return res.send("Received a PUT HTTP method");
});

// DELETE - client should never delete session data

export default router;
