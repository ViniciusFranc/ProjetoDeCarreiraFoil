const express = require ("express");
const session = require ('express-session');
 const bodyparser = require('body-parser');



const port = 3000;
var path = require('path');
const app = express();


var login = "admin";
var password = "123456"


app.use(session({secret:'yfbeir34131iuw'}));
app.use(bodyparser.urlencoded({extended:true}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));


app.post('/', (req,res)=>{
    if (req.body.password == password && req.body.login == login){
        // user logado
        req.session.login = login;
        
        res.render('logado')

    }else{
        res.render('index');
    }
})


app.get('/' , (req,res) => {
    if (req.session.login){
        res.render('logado')
    }else{
        req.render('index')
    }

    res.render('index');
})


app.listen(port, () => {
    console.log('exemple test');
})

