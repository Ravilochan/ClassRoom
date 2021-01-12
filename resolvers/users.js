const User = require("../models/User")
const jwt = require("jsonwebtoken")
const bycrypt = require("bcryptjs")

module.exports={
    Mutation:{
        async register(_,
        {
            registerInput: { username , email , password, confirmPassword}
        },context,info){
            //TODO Validate User Data
            password = await b
        //TODO Unique User
        // Auth Token
        }
    }
}