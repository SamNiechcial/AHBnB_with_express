const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/AHBnB', (req, res) => res.send('Here is our AirBNB page!') )

app.listen(5000, () => console.log('Example app listening on port 5000!'))
