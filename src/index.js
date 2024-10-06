const express = require ("express");
const session = require ("express-session");
 
const port = 3000;
var path = require('path');
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));


server.listen(port, () => {
    console.log('exemple test')
});

const express = require ("express")
const app = express()
const port = 3000

app.get("/",(req,res) => {
    res.send('...')
})

app.listen(port, () => {
    console.log('exemple test')
})
