const express = require('express');
const router = express.Router();
const Movie = require('../models/movie.model');

router.get("/get-all-movies", async (req, res) => {
  try {
    const selectedDate = req.query.date;
    let query = {};

    if (selectedDate) {
      // Convert selected date to UTC
      const startDate = new Date(selectedDate);
      startDate.setUTCHours(0, 0, 0, 0);

      // Query for movies where at least one airing time has the exact start date
      query = {
        "airing_time.start_time": startDate
      };
    }
    
    const movies = await Movie.find(query);

    res.send({
      success: true,
      message: "Movies fetched successfully",
      data: movies,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
