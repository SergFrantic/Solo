require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const hbs = require('hbs');



const indexRouter = require('./src/routes/index.router');
const chicagoRouter = require('./src/routes/chicago.router');


app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

hbs.registerPartials(path.join(process.env.PWD, 'src', 'views', 'partials'));
app.set('views', path.join(process.env.PWD, 'src', 'views'));



app.use('/', indexRouter);
app.use('/', chicagoRouter);


app.listen(PORT, ()=>{
  console.log("В работе сервер", PORT)
})

