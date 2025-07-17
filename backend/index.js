const express = require('express')
// const cors = require('cors')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text({ type: 'text/plain' }));

app.use(express.static("./public"));

app.get('/hello', (req, res) => {
    return res.send("Hello World")
})

app.post('/capitalize', (req, res) => {
    return res.send((req.body).toUpperCase())
})

const PORT = 4000

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})
