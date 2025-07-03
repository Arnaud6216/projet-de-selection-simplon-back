const express = require("express");
const router = express.Router();
const jokeController = require("../controllers/jokeController");

router.post("/blagues", jokeController.createJoke);
router.get("/blagues", jokeController.getAllJokes);
router.get("/blagues/random", jokeController.getRandomJoke);
router.get("/blagues/:id", jokeController.getJokeById);

module.exports = router;