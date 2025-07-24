import Courses from "../models/coursemodel.js"

const coursesList = async (req, res)=> {
    const courseList = await Courses.find();
    console.log(courseList);
    
    res.status(200).send({message: "Courses List", data: courseList})
}

export {coursesList}