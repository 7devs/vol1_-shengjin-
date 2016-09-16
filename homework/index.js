var app = require('express')(),
    bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({extended:false}));

app.use('/api',require('./lib/routers/api'));




app.listen(3000);
