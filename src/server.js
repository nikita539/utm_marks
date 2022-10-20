const express = require('express')
const path = require('path')

const app = express()

const PORT = 3003


app.use(express.static(path.join(__dirname,'./dist')))

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '../src/dist/index.html'))
})

app.get('/develop', (request, response) => {
    response.sendFile(path.join(__dirname, '../src/dist/index.html'))
})

app.listen(PORT, function () {
    console.log("Application is started at localhost:3003")
})
