const express = require('express');
const crudroute = require('./routes/crudroute')


const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// app.get('/',(req,res) => {
//     res.render('index');
// })
app.use(crudroute);


// app.use(crudroute);

app.listen(8000);