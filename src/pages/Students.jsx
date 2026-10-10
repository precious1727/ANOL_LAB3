import studentsData from '../data/students.json'; 
import StudentCard from '../components/StudentCard'; 

function Students() {
  return (
    <div>
      <h2>Student List</h2>
      <div className="student-list">
        {studentsData.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
}

export default Students;