require("dotenv").config()
const express = require("express")
const { connectDB } = require("./src/config/db")
const { cocheRoutes } = require("./src/api/routes/coche")
const { conductorRoutes } = require("./src/api/routes/conductor")

const app = express()

const PORT = 3000

// Middleware para parsear JSON
app.use(express.json())

//Conexion a la BBDD
connectDB()

//Rutas
app.use("/api/v1/coches", cocheRoutes)
app.use("/api/v1/conductores", conductorRoutes)

// INICIO DEL SERVIDOR
app.listen(PORT, () =>{
  console.log(`Server running on: http://localhost:${PORT}`)
  
})

