const mongoose = require('mongoose')

const formHistorySchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    cluster: {
        type: String,
        required: true
    },
    address: {
        type: Array,
        required: true
    },
    nobuVA: {
        type: String,
        required: true
    },
    paymentAmount: {
        type: String,
        required: true
    },
    dueDate: {
        type: String,
        required: true
    },
    flagEktp: {
        type: Boolean,
        required: true
    },
    flagEktpCouple: {
        type: Boolean,
        required: true
    },
    flagNpwp: {
        type: Boolean,
        required: true
    },
    flagKk: {
        type: Boolean,
        required: true
    },
    flagAktaNikah: {
        type: Boolean
    },
    flagBuktiPenghasilan: {
        type: Boolean
    },
    flagSuratPersetujuanPasangan: {
        type: Boolean
    },
    salesName: {
        type: String,
        required: true
    },
    contactPerson: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: [
            {
                validator: function(value) {
                    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                    return emailRegex.test(value)
                },
                message: 'Invalid email format',
            }
        ]
    }    
}, {timestamps: true, versionKey: false})

const FormHistory = mongoose.model('FormHistory', formHistorySchema)
module.exports = FormHistory