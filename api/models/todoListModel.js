'use strict';
var mongose=require('mongoose');
var schema=mongose.Schema;

var TaskSchema=new schema({
    name:{
        type:String,
        required:'enter the name of task'
    },
    Created_date:{
        type:Date,
        default:Date.now
    },
    status :{
      type: [{
          type:String,
          enum :['pending','ongoing','completed']
      }],
      default :['pending']
    }
});

module.exports=mongose.model('Tasks',TaskSchema)
