const express = require('express');
const router = express.Router()
const Producto = require('../models/producto')

//obtener todo
router.get('/', async (req,res) => {
     try { 
        const productos = await Producto.find()
        res.json(productos)
    }catch (err) {
        res.status(500).json({message: err,message})
    }
})

//obtener uno
router.get('/producto/:id',(req,res) =>{})

//crear uno
router.post('/', async (req,res) => {
    const productos = new Producto({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    })
    try{
        const newProducto = await productos.save()
        req.status(201).json(newProducto)
    }catch(error){
        req.status(400).json({message: err.message})
    }
})

//update uno
router.patch('/producto/:id', (req,res) => {})

//eliminar uno
router.delete('/producto/:id', (req,res) => {})


module.exports = router