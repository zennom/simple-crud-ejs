const Sequelize = require('sequelize')
const config = require('../config/database')
const {Pessoa, Curso} = require ('../models/')

const ProdutoController = {
    index:async(req,res) =>{
        res.render('pessoas')
    }
}