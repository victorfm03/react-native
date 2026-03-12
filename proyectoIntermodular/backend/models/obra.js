const { Sequelize } = require("sequelize")

module.exports=function(sequelize,DataTypes){

    return sequelize.define("obra",{

        idobra: {

            autoIncrement:true,
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true

        },
        tipo:{

            type: DataTypes.ENUM('anime','manga'),
            allowNull:false,
        },
        titulo:{
            type: DataTypes.STRING(45),
            allowNull:false,
            unique:true
        },
        sinopsis:{
            type: DataTypes.STRING(200),
            allowNull:true,
        },
        genero:{
            type: DataTypes.STRING(45),
            allowNull:false,
        },
        fechalanzamiento:{

            type: DataTypes.DATE,
            allowNull:false,
        },

        estudio:{

            type: DataTypes.STRING(50),
            allowNull:false,
        },
        autor:{

            type: DataTypes.STRING(45),
            allowNull:false,
        },
        portada:{
            type: DataTypes.BLOB('long'),
            allowNull:false
        },
        estado:{

            type: DataTypes.ENUM('cancelado', 'finalizado', 'en emision', 'proximamente'),
            allowNull:false,
        }

    },

{
    tableName:"obra",
    timestamps: false,
    indexes:[
        {
            name: "PRIMARY",
            unique:true,
            using:"BTREE",
            fields:[
                {name:"idobra"}
            ]
        }


    ]
})

}