import express from "express"
import connectDB from "./utils/db.js";
import authRouter from "./router/authrouter.js"
import coursesRouter from "./router/coursesrouter.js"
import ordersRouter from "./router/orderrouter.js"
import cors from "cors"

const app = express();

var corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}
// app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions))
app.use(express.json())

app.use("/api/auth", authRouter)

app.use("/uploads", express.static("uploads")); // Serve uploaded images
app.use("/api/courses", coursesRouter)

app.use("/api/orders", ordersRouter)

const PORT = 3001;
connectDB().then(()=>{
    app.listen(3001, ()=>{
        console.log(`Server running on PORT: ${PORT}`);
    })
})