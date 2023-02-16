require("dotenv").config()
const userLib = require("./backend/lib/userLib")
const mongoose = require("mongoose")

const express = require('express');
const app = express();
const port = process.env.PORT || 5010;

const options = {
	extensions:['htm','html','css','js','ico','jpg','jpeg','png','svg','pdf'],
	index:['index.html'],
}
app.use(express.static("images",options));

app.get("/", function(req, res){
	// res.send("I'm Raviteja");
	res.sendFile(__dirname + "/index.html");
});
app.get("/resume", function(req, res){
	res.sendFile(__dirname + "/resume.html")
})
app.get("/card", function(req, res){
	res.sendFile(__dirname + "/card.html")
})
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_CONNECTION_STRING, {}, function(err){
	if(err){
		console.error(err)
	}else{
		console.log("DB Connected");
		userLib.createFirstUser(function(err, res){
			//ToDo: Donot create user if atleast one user exists in the table
			if(err){
				// console.error(err)
			}
			else{
				console.log(res)
			}
		});
		userLib.updateUser(function(err, result){
			if(err){
				console.error(err)
			}
			else{
				console.log("User Got Updated")
				console.log(result)
				
			}
		})

		app.listen(port, function(){
			console.log("Server running on http://localhost:"+port);
			console.log(`Server running on http://localhost:${port}`);
		});
	}
});

