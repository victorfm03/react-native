const { Sequelize } = require("sequelize")

module.exports=function(sequelize,DataTypes){

    return sequelize.define("puntua",{

        idusuario: {
            primaryKey:true,
            type: DataTypes.INTEGER,
            allowNull:false,
            references: {
                model: 'usuario',
                key: 'idusuario'
            },
            onDelete: 'CASCADE'

        },
        idobra:{
            primaryKey:true,
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'obra',
                key: 'idobra'
            },
            onDelete: 'CASCADE'
        },
        puntuacion:{
            type: DataTypes.DECIMAL(2,1),
            allowNull: true,
            defaultValue: 0
        }

    },

{
    tableName:"puntua",
    timestamps: false,
    indexes:[
        {
            name: "PRIMARY",
            unique:true,
            using:"BTREE",
            fields:[
                {name:"idusuario"},
                {name:"idobra"}
            ]
        }
    ]
})

}