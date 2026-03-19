require('dotenv').config()
const mongoose = require('mongoose')

const { Conductor } = require('../../api/models/conductor')
const { conductores } = require('../../data/conductores')

const lanzarSemilla = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)

    await Conductor.collection.drop()
    console.log('Conductores eliminados')

    await Conductor.insertMany(conductores)
    console.log('Conductores introducidos')

    await mongoose.disconnect()
    console.log('Desconectamos de BBDD')
  } catch (error) {
    console.log('error')
  }
}

lanzarSemilla()

module.exports = { conductores }
