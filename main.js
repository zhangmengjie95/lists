var express=require("express");
var app=express();
var ejs=require("ejs");
var bodyparser=require("body-parser");
app.use(express.static(__dirname+"/public"));
app.use(bodyparser.urlencoded({extended:false}));
var mysql=require("mysql");
var connection=mysql.createConnection({
	 "host":"127.0.0.1",
	 "user":"root",
	 "password":"123456",
	 "port":"3306",
	 "database":"class"
});

connection.connect();
app.get("/load",function(req,res){
	
	 connection.query("select * from list",function(err,data){ 
	   
	    if(data){
	    	res.send({code:0,data:data}) 
	    	
	    }
	  
	 
	 })
	 
})


app.listen(8090,function(){
	 console.log(8090)
});
