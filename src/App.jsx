import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Students from './pages/Students';
import StudentDetails from './pages/StudentDetails';
import AddStudent from './pages/AddStudent';
import Teachers from './pages/Teachers';
import AddTeacher from './pages/AddTeacher';

function App() {
  const [studentsList, setStudentsList] = useState([]);
  const [teachersList, setTeachersList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then(response => response.json())
      .then(data => {
         setStudentsList(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/api/teachers")
      .then(response => response.json())
      .then(data => {
         setTeachersList(data);
      });
  }, []);

return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students studentsData={studentsList} />} />
        <Route path="/students/:id" element={<StudentDetails />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/teachers" element={<Teachers teachersData={teachersList} />} />
        <Route path="/add-teacher" element={<AddTeacher />} />
      </Routes>
    </>
  );
}

export default App;