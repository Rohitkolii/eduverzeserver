import mongoose from "mongoose"

const URI = "mongodb+srv://rohitkolisd:eduverze@eduverze.c5thv6m.mongodb.net/?retryWrites=true&w=majority&appName=eduverze"

const connectDB = async () => {
    try {
        await mongoose.connect(URI)
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;