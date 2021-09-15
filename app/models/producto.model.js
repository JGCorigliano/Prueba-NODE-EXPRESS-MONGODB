module.exports = mongoose => {
  let productoSchema = new mongoose.Schema({
    nombre: String,
    oferta: Boolean,
    precio: Number
  })
  
  module.exports = mongoose.model('producto', productoSchema)
  return productoSchema;
}
