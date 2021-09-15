const db = require("../models");
const usuario = db.usuarios;

exports.create = (req, res) => {
    if(!req.body.nombre){
        res.status(404).send({message: "El contenido no puede estar vacio"});
        return;
    }

    const usuario

};

exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    let conditions = nombre ? {nombre: {$regex: new RegExp(nombre), $options: "i"}} : {};

    usuario.find(conditions)
        .then((data => {res.send(data);
        })
        .catch((err) => {
            res.status(500).send({message: err.message || "Algun error ha ocurrido durante el llamado"});
        })
    )
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    usuario.findById(conditions)
        .then((data => {
            if(!data)
                res.status(404).send({ message: "No funciono el usuario con el id" + id });
            else res.send(data);
        })
        .catch((err) => {
            res.status(500).send({message: err.message || "No recibio el usuario con el id" + id });
        })
    )
};

exports.update = (req, res) => {
    if(!req.body){
        return res.status(500).send({message: "La data no puede estas vacia"});
    }

    const id = req.params.id;

    usuario.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data =>{
            if(!data){
                res.status(404).send({message: `No se pudo updatear el usuario con el id: ${id}. O quizas usuario no funciona`});
            }
            else{
                res.send({message: "usuario updateado correctamente"})
            }
        })
        .catch(err => {
            res.status(500).send({message: "Error updateando el usuario con el id:" + id});
        })
};
