var mongoose = require("mongoose");
var Skema = mongoose.Schema;

var reserva = new Skema({
    nombre:String,
    apellido:String,
    documento:String,
    email:String,
    direccion:String,
    f_entrada:String,
    f_salida:String,
    pais:String,
    estado:String,
    c_postal:Number,
    mayor_edad:Boolean,
      
});

module.exports = mongoose.model("Reservas",reserva);