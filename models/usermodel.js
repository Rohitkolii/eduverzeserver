import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    age: {type: String, default: ""},
    gender: {type: String, default: ""},
    class: {type: String, default: ""},
    contact: {type: String, default: ""},
    location: {type: String, default: ""},
    isAdmin: {type: String, default: false}
})

//
userSchema.methods.generateToken = function(next){
    try {
        return jwt.sign({
        username: this.username,
        id:this._id,
        email:this.email
    },
    "THISWEBAPPLICATIONISANONLINELEARNINGPLATFORM",
    {
        expiresIn:"1d"
    }
)
    } catch (error) {
        console.log(error);
    }
}

const Users = new mongoose.model("user", userSchema);

export default Users;