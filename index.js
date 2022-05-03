require("./config");
const express = require("express");
const rutas = require("./routes/rutas");

const app = express();
app.use(express.json());

app.use(rutas);

const PORT = 3007;
app.listen(PORT, () => {
  console.log(`La API  esta corriendo en http://localhost:` + PORT);
});