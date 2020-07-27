const express = require('express')
const app = express();
//var fs = require('fs')

var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false}));

var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

// npm i handlebars consolidate --save
const engines = require('consolidate');
app.engine('hbs',engines.handlebars);
app.set('views','./views');
app.set('view engine','hbs');

app.get('/',(req,res)=>{
    // index.hbs trong folder views
    res.render('index');
})
app.get('/jquery',(req,res)=>{
    res.render('jquerydemo');
})

//  tao server tren heroku
        const PORT = process.env.PORT || 5000
        app.listen(PORT);
//app.listen(5000);
console.log('Sever is running!');