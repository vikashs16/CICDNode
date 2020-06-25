const express = require('express');
const app = express();

app.get('/', (req,res) =>{
    res.send('Hello world with CICD check !!');
});

app.listen(7000 ,() =>{
    console.log('server has been start 7000 Port');
})