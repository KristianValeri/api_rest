const { Conductor } = require("../models/conductor")
const { Coche } = require("../models/coche")

const getConductores = async (req, res, next) => {
  try {
    const allConductores = await Conductor.find()
    return res.status(200).json(allConductores)
  } catch (error) {
    console.error(error)
    return res.status(500).json('Ha fallado la peticion')
  }
}

const getConductor = async (req, res, next) => {
  console.log({ params: req.params })
  try {
    const conductor = await Conductor.findOne({ _id: req.params.id })
    if (!conductor) {
      return res.status(404).json('Conductor no encontrado')
    }
    return res.status(200).json(conductor)
  } catch (error) {
    console.error(error)
    return res.status(500).json('Ha fallado la peticion')
  }
}

const createConductor = async (req, res, next) => {
  try {
    const conductor = await Conductor.create(req.body)
    return res.status(201).json(conductor)
  } catch (error) {
    console.error(error)
    return res.status(500).json('Ha fallado la peticion')
  }
}

const updateConductor = async (req, res, next) => {
  try {
    const { id } = req.params

    const updatedConductor = await Conductor.findByIdAndUpdate(id, req.body, {
      new: true
    })
    if (!updatedConductor) {
      return res.status(404).json('Conductor no encontrado')
    }
    return res.status(200).json(updatedConductor)
  } catch (error) {
    console.error(error)
    return res.status(500).json('Ha fallado la peticion')
  }
}

const deleteConductor = async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedConductor = await Conductor.findByIdAndDelete(id)

    if (!deletedConductor) {
      return res.status(404).json('Conductor no encontrado')
    }

    res.status(200).json('Conductor eliminado correctamente')
  } catch (error) {
    console.error(error)
    return res.status(500).json('Ha fallado la peticion')
  }
}

const getConductorCoches = async (req, res, next) => {
  console.log({ params: req.params })
  try {
    const conductor = await Conductor.findOne({ _id: req.params.id })
    if (!conductor) {
      return res.status(404).json('Conductor no encontrado')
    }
    const coches = await Coche.find({ conductor: conductor._id })
    return res.status(200).json(coches)
  } catch (error) {
    console.error(error)
    return res.status(500).json('Ha fallado la peticion')
  }
}

module.exports = { getConductores, getConductor, createConductor, updateConductor, deleteConductor, getConductorCoches }
