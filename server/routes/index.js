const router = require('express').Router()
const formhistoryRoutes = require('./formhistoryroute.js')

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Home route'
    })
})

router.use('/formhistory', formhistoryRoutes)

module.exports = router