import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: String,
    studentNumber: String,
    course: String,
    yearLevel: String,
    sex: String

});

const Student = mongoose.model("Student", studentSchema);

export default Student;