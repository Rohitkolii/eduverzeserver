import express from "express"
import {coursesList, addCourse, SingleCourse} from "../controllers/coursescontroller.js"
const router = express.Router();
import multer from "multer"
import path from "path"

// Multer storage setup
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.get("/courseslist", coursesList)
router.get("/currentcourse/:id", SingleCourse)
router.post("/addcourse", upload.single("image"), addCourse)

export default router;