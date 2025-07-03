const Joke = require("../models/joke");

exports.createJoke = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const joke = await Joke.create({ question, answer });
    res.status(201).json(joke);
  } catch (error) {
    res.status(500).json({ error: "Erreur création blague" });
  }
};

exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ error: "Erreur récupération de blagues" });
  }
};

exports.getJokeById = async (req, res) => {
  try {
    const joke = await Joke.findByPk(req.params.id);
    if (!joke) return res.status(404).json({ error: "Blague non trouvée" });
    res.json(joke);
  } catch (error) {
    res.status(500).json({ error: "Erreur récupération de blague" });
  }
};

exports.getRandomJoke = async (req, res) => {
  try {
    const count = await Joke.count();
    const randomIndex = Math.floor(Math.random() * count);
    const joke = await Joke.findOne({ offset: randomIndex });
    if (!joke) return res.status(404).json({ error: "Aucune blague disponible" });
    res.json(joke);
  } catch (error) {
    res.status(500).json({ error: "Erreur récupération de blague aléatoire" });
  }
};