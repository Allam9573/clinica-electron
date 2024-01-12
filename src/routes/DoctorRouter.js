const express = require('express')
const router = express.Router()
const doctorController = require('../controllers/DoctorController')

router.get('/', doctorController.listarDoctores)
router.post('/nuevo', doctorController.crearDoctor)

module.exports = router;