var app = require('express')(),
    bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({extended:false}));

app.use('/user',require('./lib/routers/userapi'));




app.listen(3000);
