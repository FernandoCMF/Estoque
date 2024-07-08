const express = require('express')
const server = express()
const port = 3000

server.use(express.json())


const cursos = ['JavaScript','css', 'html']

server.get('/cursos/:index', (req, res) => {
    const {index} = req.params;

    return res.json(cursos[index])
})

server.get('/cursos', (req, res) => {
    return res.json(cursos)
})

server.post('/cursos', (req, res) => {
    const {name} = req.body //Sera?
    cursos.push(name)
    return res.json(cursos)
})

server.put('/cursos/:index',(req, res) => {
    const {index} = req.params;
    const {name} = req.body;

    cursos[index] = name

    return res.json(cursos)
})

server.delete('/cursos/:index', (req, res) => {
    const {index} = req.params
    cursos.splice(index, 1)
    return res.json({message: 'O curso foi deletado com sucesso'})
})







// rodar o server na porta selecionada
server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})