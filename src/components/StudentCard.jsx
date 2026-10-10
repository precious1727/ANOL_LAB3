import { Link } from 'react-router-dom';

function StudentCard({ student }) {
  return (
    <div className="card">
      <h3>{student.name}</h3>
      <p>Student Number: {student.studentNumber}</p>
      <Link to={`/students/${student.id}`}>View Full Details</Link>
    </div>
  );
}

export default StudentCard;