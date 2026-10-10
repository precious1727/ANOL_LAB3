import { useParams, Link } from 'react-router-dom';
import studentsData from '../data/students.json';

function StudentDetails() {
  const { id } = useParams();
  const student = studentsData.find(s => s.id === parseInt(id));

  if (!student) {
    return <h2>Student not found!</h2>;
  }

  return (
    <div className="details-container">
      <h2>Complete Details</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Student Number:</strong> {student.studentNumber}</p>
      <p><strong>Course:</strong> {student.course}</p>
      <p><strong>Year Level:</strong> {student.yearLevel}</p>
      <p><strong>Sex:</strong> {student.sex}</p>
      
      <br />
      <Link to="/students">← Go Back to Students List</Link>
    </div>
  );
}

export default StudentDetails;