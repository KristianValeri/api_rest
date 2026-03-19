const { Coche } = require("../models/coche")

const getCoches = async (req, res, next) => {
  try {
    
    const allCoches = await Coche.find().populate('conductores')
    return res.status(200).json(allCoches)
  } catch (error) {
    console.error(error)

    return res.status(500).json('Ha fallado la peticion')
  }
}

const getCoche = async (req, res, next) => {
  console.log({ params: req.params })
  try {
    const coche = await Coche.findOne({ _id: req.params.id }).populate('conductores')
    if (!coche) {
      return res.status(404).json('Coche no encontrado')
    }
    return res.status(200).json(coche)
  } catch (error) {
    console.error(error)
    return res.status(500).json('Ha fallado la peticion')
  }
}

const createCoche = async (req, res, next) => {
  try {
    
    const coche = await Coche.create(req.body)
    return res.status(201).json(coche)
  } catch (error) {
    console.error(error)
    return res.status(500).json('Ha fallado la peticion')
  }
}

const updateCoche = async (req, res, next) => {
  try {
    const { id } = req.params
    const coche = await Coche.findById(id)
    const conductores = coche.conductores.map(objectId => objectId.toString())
    
    req.body.conductores = req.body.conductores || []

    req.body.conductores = [...new Set([...req.body.conductores, ...conductores])]
    
    
    const updatedCoche = await Coche.findByIdAndUpdate(id, req.body, {
      new: true
    })
    if (!updatedCoche) {
      return res.status(404).json('Coche no encontrado')
    }
    return res.status(200).json(updatedCoche)
  } catch (error) {
    console.error(error)
    return res.status(500).json('Ha fallado la peticion')
  }
}

const deleteCoche = async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedCoche = await Coche.findByIdAndDelete(id)

    if (!deletedCoche) {
      return res.status(404).json('Coche no encontrado')
    }

    res.status(200).json('Coche eliminado correctamente')

    }catch (error) {
    console.error(error)
    return res.status(500).json('Ha fallado la peticion')
  }
}

module.exports = { getCoches, getCoche, createCoche, updateCoche, deleteCoche }
