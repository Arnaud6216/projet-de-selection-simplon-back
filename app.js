const express = require("express");
const cors = require("cors");
const app = express();
const { sequelize } = require("./config/database");
const jokeRoutes = require("./routes/jokeRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/v1", jokeRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => {
    console.log("Database synced");
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Database sync failed:", err);
  });