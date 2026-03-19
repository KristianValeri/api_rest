const { getCoches, getCoche, createCoche, updateCoche, deleteCoche } = require("../controllers/coche")

const cocheRoutes = require("express").Router()

cocheRoutes.get("/", getCoches)
cocheRoutes.get("/:id", getCoche)
cocheRoutes.post("/", createCoche)
cocheRoutes.put("/:id", updateCoche)
cocheRoutes.delete("/:id", deleteCoche)

module.exports = {cocheRoutes}

