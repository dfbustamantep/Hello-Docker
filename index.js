import express from 'express'
//Libreria para conectarnos con mongo
import mongoose from 'mongoose'

const Animal = mongoose.model('Animal',new mongoose.Schema({
    tipo:String,
    estado:String,
}))

const app = express()

//servidor de base de datos  usuario contraseña maquina puerto bd             usuario tipo admin
//mongoose.connect('mongodb://daniel:password@localhost:27017/miapp?authSource=admin')
mongoose.connect('mongodb://daniel:password@monguito:27017/miapp?authSource=admin')

//ruta raiz 
app.get('/',async(_req,res)=>{
    console.log('listando...')
    const animales = await Animal.find();
    return res.send(animales)
})
//ruta crear
app.get('/crear',async(_req,res)=>{
    console.log('creando...')
    await Animal.create({tipo:'Chanchito',estado:'Feliz'})
    return res.send('ok')
})

//aplicacion esuchando por el puerto 3000
app.listen(3000,()=>console.log('listening...'))