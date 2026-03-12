const { Sequelize } = require("sequelize")

module.exports=function(sequelize,DataTypes){

    return sequelize.define("lista",{

        idlista: {

            autoIncrement:true,
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true

        },
        idusuario:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'usuario',
                key: 'idusuario'
            },
            onDelete: 'CASCADE'
        },
        nombrelista:{
            type: DataTypes.STRING(45),
            allowNull:false
        }

    },

{
    tableName:"lista",
    timestamps: false,
    indexes:[
        {
            name: "PRIMARY",
            unique:true,
            using:"BTREE",
            fields:[
                {name:"idlista"}
            ]
        }
    ]
})

}