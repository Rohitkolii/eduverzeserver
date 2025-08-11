import Courses from "../models/coursemodel.js"

const coursesList = async (req, res)=> {
    const courseList = await Courses.find();
    console.log(courseList);
    
    res.status(200).send({message: "Courses List", data: courseList})
}

const addCourse = async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    
    const {course_name, course_description, course_category, course_price, course_publisher, course_duration, course_discount,course_points } = req.body;
    if(!course_name || !course_description || !course_category || !course_price || !course_publisher || !course_duration || !course_discount || !req.file){
        return res.json({message: "All fields are required!"})
    }

    const course_thumbnail = `uploads/${req.file.filename}`

    const newCourse = await Courses.create({
        course_name, course_description, course_category, course_price, course_publisher, course_duration, course_discount, course_thumbnail, course_points
    })
    
    res.status(200).json(newCourse);
}

const SingleCourse = async (req, res)=> {
    const id = req.params.id;
    try {
        const SingleCourseData = await Courses.findOne({_id:id})
        if(!SingleCourseData){
            return res.json({message:"Course not found!"})
        }

        res.status(200).json({data:SingleCourseData, message:"Course fetched succesfully"})
    } catch (error) {
        
    }
}

export {coursesList, addCourse, SingleCourse}