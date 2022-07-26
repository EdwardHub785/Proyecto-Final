var express = require("express");
var app = express();
var body_parser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
require("dotenv").config();
var ReservaSkema = require("./models/hotel")

app.use(cors());
app.use(body_parser.json());
app.use(body_parser.urlencoded({
    extended: true
}));

mongoose.connect(process.env.LINK)
    .then((db) => {
        console.log("Conectado a nuestra base de datos")
    })
    .catch((err) => {
        console.log("Upppsss hay un error " + err)
    })

app.get('/consultar/:documento', async (req, res) => {
    var datoDoc = req.params.documento;
    console.log(datoDoc);
    var operacion = await ReservaSkema.findOne({
        documento: datoDoc
    })
    if (operacion != null) {
        res.send(Array(operacion));
        console.log(operacion)
    } else {
        res.send(false)
    }
});
app.delete('/eliminar_reserva/:id', async (req, res) => {
    var eliminaRes = req.params.id
    let valor = await ReservaSkema.findByIdAndRemove(eliminaRes)
    console.log(valor)
    res.send(true)
})

app.get("/obtener_reservas", async function (req, res) {
    var busqueda = await ReservaSkema.find();
    res.send(busqueda);
});
app.post("/crear_reserva", async function (req, res) {
    var datos = req.body;
    var operacion = new ReservaSkema(datos);
    await operacion.save();
    res.send({
        mensaje: "Recibido"
    }); 
});

app.put("/modificar_reserva/:id", async (req, res) => {
    var id = req.params.id
    console.log(id)
    var datos = req.body
    console.log(datos)
    await ReservaSkema.updateOne({ _id: id }, datos);
    res.send({ mensaje: "reserva" + id + "modificado correctamente" });
});

app.post('/creando',async(req,res) =>{
    var datos = req.body;
    var operacion = new ReservaSkema(datos);
    console.log(operacion)
   await operacion.save();
     res.send({
         mensaje: "Recibido"
 }); 
 });
app.listen(3500);