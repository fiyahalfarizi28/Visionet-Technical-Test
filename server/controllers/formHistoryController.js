const FormHistory = require('../models/formhistory')

class Controller {
    static findOne(req, res, next) {
        FormHistory.findOne({
            email: req.params.email
        }).then((formHistory)=>{
            res.status(200).json(formHistory)
        })
        .catch(next)
    }

    static create(req, res, next) {
        console.log("masuk controller create")
        console.log(req.body)
        const {
            customerName, 
            cluster, 
            address, 
            nobuVA, 
            paymentAmount, 
            dueDate, flagEktp, 
            flagEktpCouple, 
            flagNpwp, 
            flagKk, 
            flagAktaNikah, 
            flagBuktiPenghasilan, 
            flagSuratPersetujuanPasangan, 
            salesName, 
            contactPerson, 
            email 
        } = req.body

        FormHistory.create({   
            customerName, 
            cluster, 
            address, 
            nobuVA, 
            paymentAmount, 
            dueDate, flagEktp, 
            flagEktpCouple, 
            flagNpwp, 
            flagKk, 
            flagAktaNikah, 
            flagBuktiPenghasilan, 
            flagSuratPersetujuanPasangan, 
            salesName, 
            contactPerson, 
            email 
        }).then((data) => {
            console.log("berhasil simpan data")
            res.status(201).json(data)
        }).catch(next)
    }

    static delete(req, res,next) {
        FormHistory.findByIdAndDelete({ _id: req.params.id })
        .then((data)=>{
            res.status(200).json(data)
        })
        .catch(next)
    }

    static update(req, res,next) {
        const {
            customerName, 
            cluster, 
            address, 
            nobuVA, 
            paymentAmount, 
            dueDate, flagEktp, 
            flagEktpCouple, 
            flagNpwp, 
            flagKk, 
            flagAktaNikah, 
            flagBuktiPenghasilan, 
            flagSuratPersetujuanPasangan, 
            salesName, 
            contactPerson, 
            email 
        } = req.body

        FormHistory.updateOne(
            { 
                email: req.params.email 
            },
            {   
                customerName, 
                cluster, 
                address, 
                nobuVA, 
                paymentAmount, 
                dueDate, flagEktp, 
                flagEktpCouple, 
                flagNpwp, 
                flagKk, 
                flagAktaNikah, 
                flagBuktiPenghasilan, 
                flagSuratPersetujuanPasangan, 
                salesName, 
                contactPerson, 
                email 
            }
        )
        .then((data)=>{
            res.status(200).json(data)
        })
        .catch(next)
    }
}

module.exports = Controller 