const express = require('express');
const router = express.Router()
const Usuario = require('../models/usuario')

//obtener todo
router.get('/', async (req,res) => {
     try { 
        const usuarios = await Usuario.find()
        res.json(usuarios)
    }catch (err) {
        res.status(500).json({message: err,onmessage})
    }
})

//obtener uno
router.get('/usuario/:id',(req,res) =>{})

//crear uno
router.post('/', async (req,res) => {
    const usuarios = new Usuario({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })
    try{
        const newUsuario = await usuarios.save()
        req.status(201).json(newUsuario)
    }catch(error){
        req.status(400).json({message: error.message})
    }
})

//update uno
router.patch('/usuario/:id', (req,res) => {})

//eliminar uno
router.delete('/usuario/:id', (req,res) => {})


module.exports = router