const express= require("express");
const router =express.Router();
const comentarioController=require("../controllers/comentarioController");

router.get('/',comentarioController.getAllComentarios);

router.get(`/:idcomentario`,comentarioController.getComentarioById);
router.post(`/`,comentarioController.createComentario);
router.put(`/:idcomentario`,comentarioController.updateComentario);
router.delete(`/:idcomentario`,comentarioController.deleteComentario);

module.exports=router;