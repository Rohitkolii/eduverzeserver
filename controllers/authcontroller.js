import User from "../models/usermodel.js"
import bcrypt from "bcryptjs"

const register = async (req, res) =>{
    const {username, email, password} = req.body;
    const userExists = await User.findOne({email})

    if(userExists){
        return res.send("User already exist!")
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const userCreated = await User.create( {username, email, password:hashPassword} )
    const data = {email:userCreated.email, id:userCreated._id, token: userCreated.generateToken()}
    res.status(201).send({message: "User Created", data})
}

const login = async (req, res) => {
    const {email, password} = req.body;

    const userExists = await User.findOne({email})

    if(!userExists){
        return res.status(404).send({message: "User Not Exist!"})
    }

    const isValid = await bcrypt.compare(password, userExists.password)

    if(!isValid) return res.send({message: "Invalid Credentials!"})

    res.status(200).send({message: "Login Successfull!", data:{email:userExists.email, id:userExists._id ,token:userExists.generateToken()}})
}


export {register, login}