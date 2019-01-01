'use strict';

const mysql = require('mysql');


// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'manchurian',
    database:'node_todo_task'
});
 
// connect to database
mc.connect();
 
exports.list_all_tasks=function(req,res){
   mc.query('SELECT * FROM tasks',function(err,results){
    if(err)
    res.send(err);
    return res.send({ error: false, data: results, message: 'Todos search list.' });
   })
};

