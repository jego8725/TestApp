const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, resp)=>{
    resp.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/formularioSave', (req, resp)=>{
    resp.sendFile(path.join(__dirname, 'public', 'form.html'));
});

app.post('/saveForm', (req, resp)=>{
    const { name, identification } = req.body;
    console.log('name: '+name+' identification: '+identification);

    resp.status(200).send(`name = ${name} identification = ${identification}`);
});

app.listen(port, ()=>{
    console.log(`Running http://localhost:${port}`);
});