module.exports = (sequelize, DataType) =>{
    const Curso= sequelize.define('Curso',{
        idcurso:{
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataType.STRING,
    },{
        tableName:'cursos',
        timestamps: false
    })
    Curso.associate = (listaDeModelos) =>{
        Curso.hasMany(listaDeModelos.Pessoa,{
            foreignKey: 'cursopreferido',
            as:'pessoas'
        })
    }

    return Curso
}
