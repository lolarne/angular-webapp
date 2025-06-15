const Show = require("../models/Show");

const createShow = async (req, res) => {
  const { title, category, description } = req.body;

  try {
    const newShow = await Show.create({
      title,
      category,
      description,
      UserId: req.userId, // added by middleware
    });
    res.status(201).json(newShow);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to create show", error: err.message });
  }
};

const getMyShows = async (req, res) => {
  try {
    const shows = await Show.findAll({
      where: { UserId: req.userId },
      order: [["createdAt", "DESC"]],
    });
    res.json(shows);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch shows", error: err.message });
  }
};

module.exports = { createShow, getMyShows };
