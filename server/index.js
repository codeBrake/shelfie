const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cf = require('./controller')
require('dotenv').config()
const app = express()
app.use(bodyParser.json())

massive( process.env.CONNECTION_STRING ).then( db => {
    console.log("db is connected")
    app.set('db', db);
  });

app.post('/api/product', cf.addInventory)
app.get('/api/inventory', cf.getList)
app.put('/api/product/:id', cf.editArray)
app.delete('/api/delete/:id', cf.deleteSome)

const port = process.env.PORT || 3005
app.listen(port, () => { console.log(`Server listening on port ${port}`) } );