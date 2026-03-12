const express= require("express");
const router =express.Router();
const listaObraController=require("../controllers/listaObraController");

router.get('/',listaObraController.getAllListaObras);

router.get(`/:idlista`,listaObraController.getListaObraByIdLista);
router.post(`/`,listaObraController.createListaObra);
router.put(`/:idlista/:idobra`,listaObraController.updateListaObra);
router.delete(`/:idlista/:idobra`,listaObraController.deleteListaObra);

module.exports=router;