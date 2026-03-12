const Respuesta= require("../utils/respuesta");

const {logMensaje} = require("../utils/logger.js");

const initModels=require("../models/init-models.js").initModels;

const sequelize=require("../config/squelize.js");

const models=initModels(sequelize);

const Puntua= models.puntua;

class puntuaController{
    async createPuntua(req, res){

        const puntua= req.body;

        try {

            const newPuntua= await Puntua.create(puntua);
            res.status(201).json(Respuesta.exito(newPuntua,"puntuacion insertada"))

        }catch (err){
            logMensaje("Error :"+err);
            res.status(500).json(Respuesta.error(null,"Error al crear la puntuacion "))
        }

    }

    async getPuntuaByIdUsuario(req, res){
    
            const id_usuario=req.params.idusuario;
    
            try {
    
                const data= await Puntua.findAll({
                    where: {
                        idusuario: id_usuario
                    }
                });
                if(!data){
                    res.status(404).json(Respuesta.error(null, "Puntuacion inexistente"));
                }else{
                res.json(Respuesta.exito(data,"Se recupero la Puntuacion"));
            }
    
            }catch (err){
                logMensaje("Error: "+err)
                res.status(500).json(Respuesta.error(null, "No se pudo recuperar la Puntuacion"))
            }
    
        }

    async getAllPuntua(req, res){

        try {

            const data= await Puntua.findAll();
            res.json(Respuesta.exito(data,"Se recuperaron todas las puntuaciones"));

        }catch (err){
            logMensaje("Error: "+err)
            res.status(500).json(Respuesta.error(null, "No se pudieron recuperar las puntuaciones"))
        }

    }

    async deletePuntua(req, res){

        const id_usuario=req.params.idusuario;
        const id_obra=req.params.idobra;

        try {

            const numFilas= await Puntua.destroy({
                where: {
                    idusuario: id_usuario,
                    idobra: id_obra
                }
            });

            if (numFilas== 0){

                res.status(404).json(Respuesta.error(null,"No se encontro la puntuacion del id: "+id_usuario+" en id: "+id_obra));
            }else{

                res.status(204).send();
            }


        }catch (err){
            logMensaje("Error: "+err)
            res.status(500).json(Respuesta.error(null, "No se pudieron recuperar las puntuaciones"))
        }

    }

    async updatePuntua(req, res){

        const puntua= req.body;
        const idusuario= req.params.idusuario;

        const idobra=req.params.idobra;

        if (idusuario!= puntua.idusuario){
            return res.status(400).json(Respuesta.error(null,"No existe el id: "+idusuario))
        }

        try {

            const numFilas= await Puntua.update({...puntua},{where:{idusuario,idobra}});

            if (numFilas == 0) {

                res.status(404).json(Respuesta.error(null, "No se pudo modificar la puntuacion con el id: " + idusuario));
            }else{

                res.status(204).send();

            }


        }catch (err){
            logMensaje("Error: "+err)
            res.status(500).json(Respuesta.error(null, "No se pudieron actualizar las puntuaciones"))
        }

    }
}
module.exports=new puntuaController()