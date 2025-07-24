import express from "express"
import {coursesList} from "../controllers/coursescontroller.js"
const router = express.Router();

router.get("/courseslist", coursesList)

export default router;