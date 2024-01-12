const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/clinica')
    .catch((e) => console.log(`Error: ${e}`))

const doctoresSchema = mongoose.Schema({
    nombre: String,
    especialidad: String
})

module.exports = mongoose.model('doctores', doctoresSchema);