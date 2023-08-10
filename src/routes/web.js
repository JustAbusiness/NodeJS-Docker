const express = require("express");
const router = express.Router();
const {getApartmentPage, getWibuPage} = require("../controllers/apartmentController")


// Khai bao routes
router.get('/', getApartmentPage)
router.get('/wibu', getWibuPage)




// router.get('/wibu', (req, res) =>{
//     res.render('sample.ejs') 
// })


module.exports = router