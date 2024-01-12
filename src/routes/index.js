const doctorRouter = require('./DoctorRouter')

const RouterApi = app => {
    app.use('/doctores', doctorRouter)
}

module.exports = RouterApi;
