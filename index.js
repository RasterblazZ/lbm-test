const express = require('express')
const app = express()
const port = 3000

const database = require('./database.js')

// app.use( (req,res) => {
//     // return
// })

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200)
})

app.get('/healthcheck', (req,res) => {
    res.status(200).json({'message' : "application running"})
})

app.put('/estudiante/create', (req,res)=>{
    console.log((req.body.nombre ))

    if(!(req.body.nombre  && req.body.apellido && req.body.nivel && req.body.seccion))
        return res.status(400).json({'message' : "invalid request"})

    if(!(req.body.nombre != ""  && req.body.apellido != "" && req.body.nivel != "" && req.body.seccion != ""))
        return res.status(400).json({'message' : "invalid request"})

    params = {
        nombre : req.body.nombre,
        apellido : req.body.apellido,
        nivel : req.body.nivel,
        seccion : req.body.seccion
    }

    if(database.createEstudiante())
        return res.status(200).json({'message' : "Estudiante Creado"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
