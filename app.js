const express = require("express");
const mongoose = require("mongoose");
const PORT = 8000;

//asi creamos la aplicacion express
const app = express();

//analizar los archivos .json
app.use(express.json());

//esto nos permite obtener la informacion de .env
require("dotenv").config();

//obtenemos la cadena de conexion a la base de datos desde las variables de entorno (fichero.env)
const mongoUrl = process.env.DATABASE_URL_DEV;

//configuracion con mongodb

//useNewUrlParser le indica a mooongose que use el nuevo analizador de la url

mongoose.connect(mongoUrl, { useNewUrlParser: true });

//guardamos la conexion con mongoose
const db = mongoose.connection;

db.on("error", (error) => {
  console.error("Error", error);
});

//nos indica si la conexion se ha realizado


db.once("connected", () => {
  console.log("Connected to database");
});
// nos indica si la conexion se ha cerrado
db.on("disconnected", () => {
  console.log("Disconnected to database Mongoose");
});

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
