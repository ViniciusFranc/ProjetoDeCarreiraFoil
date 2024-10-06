const express = require ("express");
const session = require ("express-session");
 
const port = 3000;
var path = require('path');
const app = express();

<<<<<<< HEAD
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));
=======
app.get("/",(req,res) => {
    res.send('...')
})
>>>>>>> 7006065f768febfd822a0a518ec9b434ea87f083


server.listen(port, () => {
    console.log('exemple test')
<<<<<<< HEAD
});
=======
})
>>>>>>> 7006065f768febfd822a0a518ec9b434ea87f083
