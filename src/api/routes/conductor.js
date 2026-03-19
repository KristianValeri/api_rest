const { getConductores, getConductor, createConductor, updateConductor, deleteConductor, getConductorCoches } = require("../controllers/conductor")

const conductorRoutes = require("express").Router()

conductorRoutes.get("/", getConductores)
conductorRoutes.get("/:id", getConductor)
conductorRoutes.get("/:id/coches", getConductorCoches)
conductorRoutes.post("/", createConductor)
conductorRoutes.put("/:id", updateConductor)
conductorRoutes.delete("/:id", deleteConductor)

module.exports = { conductorRoutes }
