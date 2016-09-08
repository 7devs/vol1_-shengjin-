function cs(req,res){
    res.write('hi,hello world.');
    res.end();
};
var http= require('http');
var server= http.createServer(cs);
server.listen(3000);
