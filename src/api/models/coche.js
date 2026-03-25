const mongoose = require("mongoose")

const cocheSchema = new mongoose.Schema({
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  matricula: { type: String, required: true, unique: true },
  año: { type: Number, required: true },
  conductores: [{ type: mongoose.Schema.Types.ObjectId, ref: "conductores", required: true }],
}, {
  timestamps:true,
  collection: "coches"
})

const Coche = mongoose.model("coches", cocheSchema, "coches")

module.exports = {Coche}
