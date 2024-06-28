const express = require("express");
const router = express.Router();
const {dashboard,selectAll,selectAllBySexe,selectAllByCity,selectAllByAge,selectAllByCityAndAge} = require("../controllers/dashboardController");

router.get('/',dashboard);
router.get('/test',selectAll)
router.get('/api/Habitant/',selectAllBySexe)
router.get('/api/Habitant/:ville',selectAllByCity)
router.get('/api/Habitant/Age/:min&:max',selectAllByAge)
router.get('/api/Habitant/AgeAndCity/:min&:max&:ville',selectAllByCityAndAge)

module.exports = {
    routes:router
}