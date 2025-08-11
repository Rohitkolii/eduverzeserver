import {addNewOrder} from "../controllers/orderController.js"
import express from "express"
const router = express.Router();


router.post("/addneworder/:id", addNewOrder)

export default router;