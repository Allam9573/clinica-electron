const Doctor = require('../models/DoctorModel')

exports.listarDoctores = async (req, res, next) => {
    res.send('listado de doctores')
}

exports.crearDoctor = async (req, res, next) => {
    const nuevoDoctor = new Doctor(req.body)
    try {
        await nuevoDoctor.save()
        res.json({ message: "data: doctor agregado" })
    } catch (error) {
        console.log('Error: ' + error)
    }
}