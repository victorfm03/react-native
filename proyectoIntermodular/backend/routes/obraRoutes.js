const express= require("express");
const router =express.Router();
const obraController=require("../controllers/obraController");

router.get('/',obraController.getAllObras);

router.get(`/titulo/:titulo`,obraController.getObraByTitulo);
router.get(`/:idobra`,obraController.getObraById);
router.post(`/`,obraController.createObra);
router.put(`/:idobra`,obraController.updateObra);
router.delete(`/:idobra`,obraController.deleteObra);

module.exports=router;