module.exports = mongoose => {
    let usuarioSchema = new mongoose.Schema({
        nombre: String,
        VIP: Boolean,
        compras: Array
    })
    
    module.exports = mongoose.model('usuario', usuarioSchema)
    return usuarioSchema;
}

