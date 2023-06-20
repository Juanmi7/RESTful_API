const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: false,
    default: [],
    validate: [
      array.length === 0 ||
        array.every((element) => {
          const keys = Object.keys(element);
          return (
            keys.every((keys) => typeof element[keys[0]] === "boolean") &&
            typeof element[keys[1]] === "string"
          );
        }),
        "No se ha introducido correctamente el array de skills",
    ],
  },
  personaluty
});
