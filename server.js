const express = require('express');
const app = express();
const bodyParser = require('body-parser');
port=process.env.port || 3002;
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
 
 
// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});
 
var routes=require('./api/routes/todoListRoutes');
routes(app);

app.use(function(req,res){
    res.status(404).send({url:req.originalUrl+' not found'})
});

app.listen(port, function () {
    console.log('Node app is running on port : ' +port);
});
 