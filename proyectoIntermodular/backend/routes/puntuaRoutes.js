const express= require("express");
const router =express.Router();
const puntuaController=require("../controllers/puntuaController");

router.get('/',puntuaController.getAllPuntua);

router.get(`/:idusuario`,puntuaController.getPuntuaByIdUsuario);
router.post(`/`,puntuaController.createPuntua);
router.put(`/:idusuario/:idobra`,puntuaController.updatePuntua);
router.delete(`/:idusuario/:idobra`,puntuaController.deletePuntua);

module.exports=router;