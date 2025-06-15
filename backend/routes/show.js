const express = require("express");
const router = express.Router();
const { createShow, getMyShows } = require("../controllers/showController");
const authenticate = require("../middleware/authMiddleware");

router.post("/", authenticate, createShow);
router.get("/", authenticate, getMyShows);

module.exports = router;
