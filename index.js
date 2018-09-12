const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use('/static', express.static('static'));


app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index');
});


app.listen(80, () =>{
    console.log('oks');
});
