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
	
	 connection.query("select * from lists",function(err,data){ 
	    if(data){
	    	res.send({code:0,data:data}) 
	    }
	 }) 
});
app.post("/add",function(req,res){
	 var title=req.body.title,
	     text=req.body.text,
	     num=req.body.num;
	   
  connection.query("select * from lists where title='"+title+"'",function(err,data){ 
	        
	     if(data.length==0){
	
	     	 connection.query("insert into lists(title,content,num) values('"+title+"','"+text+"','"+num+"')",function(err,data){
	     	 	    
	     	 	  	 res.send({code:0}) 
	     	 	  
	     	 })
	     	 
	     }
	     
	  
	 
	 })
	  
});
app.post("/set",function(req,res){
	   var sum=req.body.sum;
	   var txt=req.body.txt;
	       
	 connection.query("update lists set num='"+sum+"' where title='"+txt+"' ",function(err,data){ 
	     console.log(data)
	 }) 
}); 

app.listen(8088,function(){
	 console.log(8088)
});
