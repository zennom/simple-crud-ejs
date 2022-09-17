const {Usuario} = require('../models')

const userController = {
    index: async(req,res) =>{
        let users = await Usuario.findAll()
        return res.render('usuarios',{users})
    },
    create:(req,res) =>{
        return res.render("cadastroUsuario")
    },
    store:async(req,res) =>{
        const {nome, email,senha} = req.body

        const resultado = await Usuario.create({
            nome,
            email,
            senha
        })
        return res.redirect('/usuarios')
    },
    update:async(req,res) =>{
        //recendo o id, nome email e senha
        const {id} = req.params
        const {nome,email,senha} = req.body

        //armazenando dentro da variavel resultado
        const resultado = await Usuario.update({
            nome,
            email,
            senha
        },
        {
            //quando vamos atualizar um usuário
            //devemos atualiza-ló pelo ID
            where:{
                id_usuario:id
            }
        })

        return res.redirect('/usuarios')
    }
}
module.exports = userController