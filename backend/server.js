import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Student from "./models/students.js";
import Teacher from "./models/teachers.js"; 

const app = express();
app.use(cors());

mongoose.connect("mongodb://localhost:27017/studentDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(error => console.log(error));

app.get("/api/students", async (req, res) => {
  const students = await Student.find(); 
  res.json(students);
});

app.get("/api/teachers", async (req, res) => {
  const teachers = await Teacher.find(); 
  res.json(teachers);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});