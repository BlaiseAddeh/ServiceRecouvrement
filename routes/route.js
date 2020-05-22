const express =  require('express');
const controller = require('../controller/controller')

const router = express.Router();
router.get('/api/getTotalPlantation', controller.getTotalPlantation);
router.get('/api/getTotalPlantationAvec1Paiement', controller.getTotalPlantationAvec1Paiement);
router.get('/api/getTotalPlantationEtatEgaleAZero', controller.getTotalPlantationEtatEgaleAZero);
router.get('/api/getTotalPlantationEtatEgaleAUn', controller.getTotalPlantationEtatEgaleAUn);
router.get('/api/getTotalPlantationEtatEgaleADeux', controller.getTotalPlantationEtatEgaleADeux);
router.get('/api/getTotalMontantPrevisionnel', controller.getTotalMontantPrevisionnel);
router.get('/api/getTotalMontantPercu', controller.getTotalMontantPercu);
router.get('/api/getTotalMontantPercuAvecPlantationEtatEgaleAZero', controller.getTotalMontantPercuAvecPlantationEtatEgaleAZero);
router.get('/api/getTotalMontantPercuAvecPlantationEtatEgaleAUn', controller.getTotalMontantPercuAvecPlantationEtatEgaleAUn);
router.get('/api/getTotalMontantPercuAvecPlantationEtatEgaleADeux', controller.getTotalMontantPercuAvecPlantationEtatEgaleADeux);
// router.post('/api/addNewData' , controller.addNewData);
// router.put('/api/updateData',controller.updateData);
// router.delete('/api/deleteData' , controller.deleteData);

module.exports = router;