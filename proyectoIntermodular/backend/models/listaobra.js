const { Sequelize } = require("sequelize")

module.exports=function(sequelize,DataTypes){

    return sequelize.define("listaObra",{

        idlista: {
            primaryKey:true,
            type: DataTypes.INTEGER,
            allowNull:false,
            references: {
                model: 'lista',
                key: 'idlista'
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
        fechaadicion:{
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW
        }

    },

{
    tableName:"listaobra",
    timestamps: false,
    indexes:[
        {
            name: "PRIMARY",
            unique:true,
            using:"BTREE",
            fields:[
                {name:"idlista"},
                {name:"idobra"}
            ]
        }
    ]
})

}