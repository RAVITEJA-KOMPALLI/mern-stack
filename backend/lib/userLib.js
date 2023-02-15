const userModel = require("../models/userModel");

module.exports.getAllUsers = async function(callback){
    try{
        var users = await userModel.find({})
        callback(null, users)
    }
    catch(error){
        callback(error, null)
    }
}

module.exports.createFirstUser = async function(callback){
    try{
        var user = {
            userName: "ravitejaKompalli",
            yearOfGraduation: 2023
        }
        var newUser = new userModel(user)
        var createdUser = await newUser.save()
        callback(null, createdUser)
    }
    catch(error){
        callback(error, null)
    }

}
