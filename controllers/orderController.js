import jwt from "jsonwebtoken";

const addNewOrder = async (req, res) => {
    console.log(req.params.id);

    const bearer = req.headers.authorization
    const token = bearer.replace("Bearer ","").trim()
    
    const user = jwt.verify(token, "THISWEBAPPLICATIONISANONLINELEARNINGPLATFORM").id
    console.log(user);
    
    
}

export {addNewOrder}