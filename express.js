require("dotenv").config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date()}`);
    next();
});



app.get('/', (req, res) => {
    res.send('My Week 2 API!')
});

app.post('/user', (req, res) => {
    const {name, email} = req.body;
    if(!name || !email) return res.status (400).send("Missing Fields!");
    console.log(req.body);
    res.json(`HELLO !${name} Registered email: ${email}`);
   
});

app.get('/user/:id', (req, res) => {
    res.json({id: req.params.id, name: "My Profile"})
});


app.listen(PORT || 3000, () => {
    console.log(`example app listening on port ${PORT}`);
});