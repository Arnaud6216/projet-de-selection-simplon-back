const express = require("express");
const router = express.Router();
const jokeController = require("../controllers/jokeController");

/**
 * @swagger
 * /api/v1/blagues:
 *   post:
 *     summary: Créer une nouvelle blague
 *     tags:
 *       - Blagues
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - question
 *               - answer
 *             properties:
 *               question:
 *                 type: string
 *               answer:
 *                 type: string
 */
router.post("/blagues", jokeController.createJoke);

/**
 * @swagger
 * /api/v1/blagues:
 *   get:
 *     summary: Obtenir toutes les blagues
 *     tags:
 *       - Blagues
 *     responses:
 *       200:
 *         description: Liste de toutes les blagues
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Blague'
 */
router.get("/blagues", jokeController.getAllJokes);

/**
 * @swagger
 * /api/v1/blagues/random:
 *   get:
 *     summary: Obtenir une blague aléatoire
 *     tags:
 *       - Blagues
 *     responses:
 *       200:
 *         description: Une blague aléatoire
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blague'
 */
router.get("/blagues/random", jokeController.getRandomJoke);

/**
 * @swagger
 * /api/v1/blagues/{id}:
 *   get:
 *     summary: Obtenir une blague par ID
 *     tags:
 *       - Blagues
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la blague
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Blague trouvée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blague'
 *       404:
 *         description: Blague non trouvée
 */
router.get("/blagues/:id", jokeController.getJokeById);

/**
 * @swagger
 * /api/v1/blagues/{id}:
 *   delete:
 *     summary: Supprimer une blague par ID
 *     tags:
 *       - Blagues
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la blague à supprimer
 *         required: true
 *         schema:
 *           type: integer
 */
router.delete("/blagues/:id", jokeController.deleteJoke);

module.exports = router;