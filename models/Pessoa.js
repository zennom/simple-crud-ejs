module.exports = (sequelize, DataType) =>{
    const Pessoa = sequelize.define('Pessoa',{
        id:{
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataType.STRING,
        cursopreferido:{
            type:DataType.INTEGER
        }
    },{
        tableName:'pessoas',
        timestamps: false
    })
    Pessoa.associate = (listaDeModelo) =>{
        Pessoa.belongsTo(listaDeModelo.Curso,{
            foreignKey: 'cursopreferido',
            as:'curso'
        })
    }
    return Pessoa
}
