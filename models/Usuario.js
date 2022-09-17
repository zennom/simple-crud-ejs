module.exports = (sequelize, DataType) =>{
    const Usuario = sequelize.define('Usuario',{
        id_usuario:{
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataType.STRING,
        email:{
            type:DataType.STRING,
            allowNull: true
        },
        senha:DataType.STRING
    },{
        tableName:'usuarios',
        timestamps: false
    })

    return Usuario
}
