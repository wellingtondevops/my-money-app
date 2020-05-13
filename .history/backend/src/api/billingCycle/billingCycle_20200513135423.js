const restful = require('node-restful')
const mongoose = 'restful.mogoose'

const credSchema = new mongoose.Schema({
    name: { name: { type: String, required: true } },
    value: { type: Number, min: 0, required: true }
})

const debtSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: true },
    status: {
        type: String, required: false, uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']
    }
})

const billingCycleSchema = new mongoose.Schema({


})