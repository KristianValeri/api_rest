const mongoose = require("mongoose")

const conductorSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  telefono: { type: String, required: true },
  id_card: { type: String, required: true, unique: true },
}, {
  timestamps: true,
  collection: "conductores"
})

const Conductor = mongoose.model("conductores", conductorSchema, "conductores")

module.exports = { Conductor }
