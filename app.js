const express = require("express"); // Importamos express
const mongoose = require("mongoose"); // Importamos mongoose
const PORT = 8000;

// Así creamos la aplicación de express
const app = express(); // Creamos el servidor

// Analizar los archivos JSON
app.use(express.json());

// Esto nos permite obtener la informacion de configuracion de ".env"
require("dotenv").config(); // Importamos dotenv

// Obtenemos la cadena de conexion a la base de datos desde las variables de entorno (fichero .env)
const mongoUrl = process.env.DATABASE_URL_DEV; // Obtenemos la URL de la base de datos

// Configuracion con mongoDb
// Conectamos a la base de datos
// El useNewUrlParser le indica a mongoose que utilice el nuevo analizador de URL de la cadena de conexión
mongoose.connect(mongoUrl, { useNewUrlParser: true });

// Guardar conexion con mooongose

const db = mongoose.connection;

// Verificamos que la conexion ha sido correcta, de lo contrario, mostramos un error
// Si hay un error en la conexion
db.on("error", (error) => {
  console.error("Error: ", error);
});

// Nos indica que se ha establecido la conexion correctamente

db.once("connected", () => {
  console.log("Success connect");
});

// Nos indica si se ha desconectado
db.once("disconnected", () => {
  console.log("Mongoose is disconnected");
});

const users = require("./Controller/userController"); // Importamos el modulo userController.js
app.use("/users", users); // Usamos el modulo userController.js

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`); // Imprimimos mensaje de confirmacion
});
