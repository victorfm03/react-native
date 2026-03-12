const Respuesta= require("../utils/respuesta");

const {logMensaje} = require("../utils/logger.js");

const initModels=require("../models/init-models.js").initModels;

const sequelize=require("../config/squelize.js");

const models=initModels(sequelize);

const Obra= models.obra;

const { Op } = require("sequelize");

class obraController{
    async createObra(req, res){

        const obra= req.body;

        try {

            const newObra= await Obra.create(obra);
            res.status(201).json(Respuesta.exito(newObra,"obra insertada"))

        }catch (err){
            logMensaje("Error :"+err);
            res.status(500).json(Respuesta.error(null,"Error al crear la obra"))
        }

    }

    async getObraById(req, res){
    
            const id_obra=req.params.idobra;
    
            try {
    
                const data= await Obra.findByPk(id_obra);
                if(!data){
                    res.status(404).json(Respuesta.error(null, "Obra inexistente"));
                }else{
                res.json(Respuesta.exito(data,"Se recupero la Obra"));
            }
    
            }catch (err){
                logMensaje("Error: "+err)
                res.status(500).json(Respuesta.error(null, "No se pudieron recuperar las Obras"))
            }
    
        }

    async getObraByTitulo(req, res){

        const titulo=req.params.titulo;

        try {

            const data= await Obra.findAll({
                where: {
                    titulo: {[Op.like]: `%${titulo}%`}
                }
            });

            if(data.length===0){
                res.status(404).json(Respuesta.error(null, "Obra inexistente"));
            }else{
            res.json(Respuesta.exito(data,"Se recupero la Obra"));
        }

        }catch (err){
            logMensaje("Error: "+err)
            res.status(500).json(Respuesta.error(null, "No se pudieron recuperar las Obras"))
        }

    }

    async getAllObras(req, res){

        try {

            const data= await Obra.findAll();
            res.json(Respuesta.exito(data,"Se recuperaron todos las obras"));

        }catch (err){
            logMensaje("Error: "+err)
            res.status(500).json(Respuesta.error(null, "No se pudieron recuperar las obras"))
        }

    }

    async deleteObra(req, res){

        const id_obra=req.params.idobra;

        try {

            const numFilas= await Obra.destroy({
                where: {
                    idobra: id_obra
                }
            });

            if (numFilas== 0){

                res.status(404).json(Respuesta.error(null,"No se encontro la obra del id: "+id_obra));
            }else{

                res.status(204).send();
            }


        }catch (err){
            logMensaje("Error: "+err)
            res.status(500).json(Respuesta.error(null, "No se pudieron recuperar las obras"))
        }

    }

    async updateObra(req, res){

        const obra= req.body;
        const idobra= req.params.idobra;

        if (idobra!= obra.idobra){
            return res.status(400).json(Respuesta.error(null,"No existe el id: "+idobra))
        }

        try {

            const numFilas= await Obra.update({...obra},{where:{idobra}});

            if (numFilas == 0) {

                res.status(404).json(Respuesta.error(null, "No se pudo modificar la obra con el id: " + idobra));
            }else{

                res.status(204).send();

            }


        }catch (err){
            logMensaje("Error: "+err)
            res.status(500).json(Respuesta.error(null, "No se pudieron actualizar las obras"))
        }

    }
}
module.exports=new obraController()