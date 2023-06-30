const express = require('express')
const cors = require('cors')
const app = express();
const port = 5000;
const chefs = require('./data/chefs.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Chef is running ')
})

app.get('/chefs', (req, res)=>{
    res.send(chefs);
    
})

app.get('/chefs/:id', (req, res)=>{
    const id = req.params.id;
    const selectedChef = chefs.find(c=> c.id == id);
    res.send(selectedChef);
    
})

// app.get('/chefs/:id', (req, res)=>{
//     const id = req.params.id;
//     const chefs = chefs.map(c => c.id == id)
//     console.log(chefs);
//     res.send(chefs);
// })



app.listen(port, () => {
    console.log(`chef is running on : ${port}`)
})

