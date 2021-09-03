//Imports
const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))
app.use('/css/main.css', express.static(__dirname + 'public/css/main.css'))



app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log(__dirname)
})

//Listen on port 3000
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})