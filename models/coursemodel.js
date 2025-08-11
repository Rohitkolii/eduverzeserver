import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    course_name: {type: String, required:true},
    course_description: {type: String, required:true},
    course_thumbnail: {type: String, required:true},
    course_category: {type: String, required:true},
    course_price: {type: String, required:true},
    course_publisher: {type: String, required:true},
    course_duration: {type: String, required:true},
    course_rating: {type: String, default: null},
    course_discount: {type: String, required:true},
    course_points: {type: Array},
},
{
  timestamps: true
});

const Courses = new mongoose.model("course", courseSchema);

export default Courses;