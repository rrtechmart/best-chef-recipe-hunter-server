const express = require('express')
const cors = require('cors')
const app = express();
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Chef is running ')
})



app.listen(port, () => {
    console.log(`Shef is running on : ${port}`)
})

