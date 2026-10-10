import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
    name: String,
    specialization: String,
    department: String,
    sex: String

});

const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;