const userModel = require("../models/userModel");

module.exports.getAllUsers = async function(callback){
    try{
        var users = await userModel.find({isDeleted: false})
        callback(null, users)
    }
    catch(error){
        callback(error, null)
    }
}

module.exports.getUserByFilter = async function(filter, callback){
    try{
        var users = await userModel.find(filter)
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

module.exports.createUser = async function(user, callback){
    try{
        var newUser = new userModel(user)
        var createdUser = await newUser.save()
        callback(null, createdUser)
    }
    catch(error){
        callback(error, null)
    }
}

module.exports.updateUser = async function(username, data, callback){
    try{
        var query = {
            userName: username
        }
        var result = await userModel.updateOne(query, data)
        callback(null, result)

    }
    catch(error){
        callback(error, null)
    }
}


module.exports.deleteUser = async function(username, callback){
    try{
        var query = {
            userName: username
        }
        var result = await userModel.update(query, {isDeleted: true})
        callback(null, result)

    }
    catch(error){
        callback(error, null)
    }
}